import React, {useContext} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import QuizScreen from '../../OnboardingFlow/Designers/QuizScreen'
import {createUser} from '../../../lib/server'
import {User, DesignerDecisionTalk, EmployerDecisionHire, CommForDesigner} from '../../../model/model'
import {Popconfirm, Typography, Table, Radio} from 'antd'
const {Column} = Table

interface CommunicationsListProps {
    communicationList: CommForDesigner[]
    updateDesignerText: (commId: string, update: DesignerDecisionTalk) => void
}

const CommunicationsList: React.FC<CommunicationsListProps> = (props) => {
    const {communicationList, updateDesignerText} = props

    const decisionToText = (dec: EmployerDecisionHire): string => {
        switch (dec) {
            case EmployerDecisionHire.UNDECIDED:
                return `Reviewing your profile`
            case EmployerDecisionHire.HIRE:
                return `Wants to hire you`
            case EmployerDecisionHire.REJECT:
                return `Rejected your profile`
        }
    }

    return (
        <Table
            style={{paddingBottom: 10, width: '100%', fontFamily: 'Mark Pro Bold', fontWeight: 'normal'}}
            size={"large"}
            dataSource={communicationList}
            bordered={false}
            pagination={{defaultPageSize: 10}}
        >
            <Column width={'35%'} title="Company Name" dataIndex="companyName" key="companyName" />
            <Column title="Company Status" dataIndex="decision" key="decision" render={(text) => (
                <Typography.Text style={{color: '#000'}}>{decisionToText(text)}</Typography.Text>
            )}/>
            <Column align={'right'} title="Decision" dataIndex="designerApprovedTalk" key="designerApprovedTalk" render={(text, record, index) => (
                <Popconfirm title={"Are you sure?"}>
                    <Radio.Group onChange={(e) => updateDesignerText(communicationList[index].communicationId, e.target.value)} value={text}>
                        <Radio.Button value={DesignerDecisionTalk.UNDECIDED}>Undecided</Radio.Button>
                        <Radio.Button value={DesignerDecisionTalk.WILL_TALK}>Will Talk</Radio.Button>
                        <Radio.Button value={DesignerDecisionTalk.WILL_NOT_TALK}>Will Not Talk</Radio.Button>
                    </Radio.Group>
                </Popconfirm> 
            )} />
        </Table>
    )
}

export default CommunicationsList