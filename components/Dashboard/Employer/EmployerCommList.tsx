import React, {useContext} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import QuizScreen from '../../OnboardingFlow/Designers/QuizScreen'
import {createUser} from '../../../lib/server'
import {User, DesignerDecisionTalk, EmployerDecisionHire, CommForEmployer} from '../../../model/model'
import {Typography, List, Radio, Popconfirm} from 'antd'

interface CommunicationsListProps {
    communicationList: CommForEmployer[]
    updateDecision: (commId: string, update: EmployerDecisionHire) => void
}

const EmployerCommList: React.FC<CommunicationsListProps> = (props) => {
    const {communicationList, updateDecision} = props

    const decisionToText = (dec: DesignerDecisionTalk): string => {
        switch (dec) {
            case DesignerDecisionTalk.UNDECIDED:
                return ''
            case DesignerDecisionTalk.WILL_TALK:
                return `They are interested in working for you. You will soon be in contact with them.`
            case DesignerDecisionTalk.WILL_NOT_TALK:
                return `They are not interested in your offer`
        }
    }

    return (
        <List
            style={{width: '100%'}}
            dataSource={communicationList}
            bordered
            renderItem={({communicationId, fullName, designerApprovedTalk, decision}) => (
                <List.Item>
                    <List.Item.Meta title={fullName} description={decisionToText(designerApprovedTalk)}/>
                    {designerApprovedTalk === DesignerDecisionTalk.WILL_TALK ? 
                    <Popconfirm title={"Are you sure?"}>
                        <Radio.Group onChange={(e) => updateDecision(communicationId, e.target.value)} value={decision}>
                            <Radio.Button value={EmployerDecisionHire.UNDECIDED}>Still In Talks</Radio.Button>
                            <Radio.Button value={EmployerDecisionHire.REJECT}>Reject</Radio.Button>
                            <Radio.Button value={EmployerDecisionHire.HIRE}>Hire</Radio.Button>
                        </Radio.Group>
                    </Popconfirm> 
                    : designerApprovedTalk === DesignerDecisionTalk.UNDECIDED ? 
                    <Typography.Text>We are contacting {fullName} to inform them you are interested.</Typography.Text>
                    : null}
                    
                </List.Item>
            )}
        />
    )
}

export default EmployerCommList