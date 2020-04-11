import React, {useState} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import QuizScreen from '../../OnboardingFlow/Designers/QuizScreen'
import {getDesignerFromCommunication} from '../../../lib/server'
import {User, DesignerDecisionTalk, EmployerDecisionHire, CommForEmployer} from '../../../model/model'
import DesignerInfoModal from './DesignerInfoModal'
import {Typography, List, Radio, Popconfirm, Table} from 'antd'
import {BigBlackButton} from '../../General/BigBlackButton'
const {Column} = Table

interface CommunicationsListProps {
    communicationList: CommForEmployer[]
    updateDecision: (commId: string, update: EmployerDecisionHire) => void
}

const EmployerCommList: React.FC<CommunicationsListProps> = (props) => {
    const {communicationList, updateDecision} = props
    const [showModal, setModalVisibility] = useState(false) 
    const [currentDesigner, setCurrentDesigner] = useState<User>(undefined) 

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
        setCurrentDesigner(user)
        setModalVisibility(true)
    }


    return (
        <>
            <DesignerInfoModal setInvisible={() => setModalVisibility(false)}
                                visible={showModal}
                               designer={currentDesigner}/>
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
                        More Info
                    </BigBlackButton>
                )} />
                 />
            </Table>
        </>
    )
}

export default EmployerCommList