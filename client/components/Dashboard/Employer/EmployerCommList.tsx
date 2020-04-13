import React, {useState, useContext} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import QuizScreen from '../../OnboardingFlow/Designers/QuizScreen'
import {getDesignerFromCommunication} from '../../../lib/server'
import {User, DesignerDecisionTalk, EmployerDecisionHire, CommForEmployer} from '../../../model/model'
import {Typography, List, Radio, Popconfirm, Table} from 'antd'
import {BigBlackButton} from '../../General/BigBlackButton'
import Router from 'next/router'
import OpenPage from '../../General/OpenPage'
const {Column} = Table

interface CommunicationsListProps {
    communicationList: CommForEmployer[]
    updateDecision: (commId: string, update: EmployerDecisionHire) => void
}

const EmployerCommList: React.FC<CommunicationsListProps> = (props) => {
    const {communicationList, updateDecision} = props
    const [showModal, setModalVisibility] = useState(false) 
    const [currentDesigner, setCurrentDesigner] = useState<User>(undefined) 
    const context = useContext(UserContext)

    const decisionToText = (dec: DesignerDecisionTalk): string => {
        switch (dec) {
            case DesignerDecisionTalk.UNDECIDED:
                return 'Reviewing Your Request'
            case DesignerDecisionTalk.WILL_TALK:
                return `Willing to Talk`
            case DesignerDecisionTalk.WILL_NOT_TALK:
                return `Declines to Talk`
        }
    }

    const onMoreInfo = async (commId: string) => {
        const user = await getDesignerFromCommunication(commId)
        OpenPage(context.setLoading, '/profile/' + user.id)
    }

    return (
        <>
            <Table
                style={{paddingBottom: 10, width: '100%', fontFamily: 'Mark Pro Bold', fontWeight: 'normal'}}
                size={"large"}
                dataSource={communicationList}
                bordered={false}
                pagination={{defaultPageSize: 10}}
            >
                <Column width={'35%'} title="Name" dataIndex="fullName" key="fullName" />
                <Column title="Designer's Status" dataIndex="designerApprovedTalk" key="designerApprovedTalk" render={(text) => (
                    <Typography.Text style={{color: '#000'}}>{decisionToText(text)}</Typography.Text>
                )}/>
                <Column align={'center'} title="Decision" dataIndex="decision" key="decision" render={(text, record, index) => (
                    <Popconfirm title={"Are you sure?"}>
                        <Radio.Group onChange={(e) => updateDecision(communicationList[index].communicationId, e.target.value)} value={text}>
                            <Radio.Button value={EmployerDecisionHire.UNDECIDED}>Reviewing</Radio.Button>
                            <Radio.Button value={EmployerDecisionHire.REJECT}>Reject</Radio.Button>
                            <Radio.Button value={EmployerDecisionHire.HIRE}>Hire</Radio.Button>
                        </Radio.Group>
                    </Popconfirm> 
                )} />
                <Column align={'center'} title="Info" dataIndex="communicationId" key="communicationId" render={(communicationId) => (
                    <BigBlackButton onClick={() => onMoreInfo(communicationId)}>
                        View Profile
                    </BigBlackButton>
                )} />
                 />
            </Table>
        </>
    )
}

export default EmployerCommList