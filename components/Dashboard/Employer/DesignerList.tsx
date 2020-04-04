import React, {useEffect, useContext, useState} from 'react'
import { createCommunication } from '../../../lib/server'
import { UserAndGrade, Employer } from '../../../model/model'
import {UserContext} from '../../../lib/UserProvider'
import {Container} from '../../General/Container'
import Loading from '../../General/Loading'
import {List, Button} from 'antd'
import DesignerInfoModal from './DesignerInfoModal'

interface DesignerListProps {
    designerList: UserAndGrade[]
}

const DesignerList: React.FC<DesignerListProps> = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)
    const {designerList} = props
    const [showModal, setModalVisibility] = useState(false) 
    const [currentDesigner, setCurrentDesigner] = useState<UserAndGrade>(undefined) 

    const onMoreInfo = (userAndGrade: UserAndGrade) => {
        setCurrentDesigner(userAndGrade)
        setModalVisibility(true)
    }

    const onConnect = async (designerId: string) => {
        const comm = await createCommunication(designerId, currentUser.id)
        setModalVisibility(false)
        const newUser = {...currentUser, communications: [...currentUser.communications, comm.id]}
        changeUser(newUser)
    }

    return (
        <>
            <DesignerInfoModal visible={showModal}
                               info={currentDesigner}
                               onConnect={onConnect}/>
            <List
                style={{width: '100%'}}
                dataSource={designerList}
                bordered
                renderItem={(userAndGrade) => {
                    console.log(userAndGrade)
                    const {designer, grade} = userAndGrade
                    return (
                        <List.Item>
                            <List.Item.Meta title={designer.firstName + " " + designer.lastName} description={"Score: " + grade.score}/>
                            <Button onClick={() => onMoreInfo(userAndGrade)}>
                                More Info
                            </Button>
                        </List.Item>
                    )
                }}
            />
        </>)
}

export default DesignerList