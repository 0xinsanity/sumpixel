import React, {useContext} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import QuizScreen from '../../OnboardingFlow/Designers/QuizScreen'
import {createUser} from '../../../lib/server'
import {User, DesignerDecisionTalk, EmployerDecisionHire, CommDesigner} from '../../../model/model'
import {Typography, List, Radio} from 'antd'

interface CommunicationsListProps {
    communicationList: CommDesigner[]
    updateDesignerText: (commId: string, update: DesignerDecisionTalk) => void
}

const CommunicationsList: React.FC<CommunicationsListProps> = (props) => {
    const {communicationList, updateDesignerText} = props

    const decisionToText = (companyName: string, dec: EmployerDecisionHire): string => {
        switch (dec) {
            case EmployerDecisionHire.UNDECIDED:
                return `${companyName} is reviewing your profile`
            case EmployerDecisionHire.HIRE:
                return `${companyName} wants to hire you`
            case EmployerDecisionHire.REJECT:
                return `${companyName} has decided to look at other profiles`
        }
    }

    return (
        <List
            style={{width: '100%'}}
            dataSource={communicationList}
            bordered
            renderItem={({communicationId, companyName, designerApprovedTalk, decision}) => (
                <List.Item>
                    <List.Item.Meta title={companyName} description={decisionToText(companyName, decision)}/>
                    <Radio.Group onChange={(e) => updateDesignerText(communicationId, e.target.value)} value={designerApprovedTalk}>
                        <Radio.Button value={DesignerDecisionTalk.UNDECIDED}>Undecided</Radio.Button>
                        <Radio.Button value={DesignerDecisionTalk.WILL_TALK}>Will Talk</Radio.Button>
                        <Radio.Button value={DesignerDecisionTalk.WILL_NOT_TALK}>Will Not Talk</Radio.Button>
                    </Radio.Group>
                </List.Item>
            )}
        />
    )
}

export default CommunicationsList