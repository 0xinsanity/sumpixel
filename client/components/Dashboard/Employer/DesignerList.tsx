import React, {useEffect, useContext, useState} from 'react'
import { createCommunication } from '../../../lib/server'
import { User, Employer } from '../../../model/model'
import {UserContext} from '../../../lib/UserProvider'
import {Container} from '../../General/Container'
import Loading from '../../General/Loading'
import {List, Button} from 'antd'
import DesignerInfoModal from './DesignerInfoModal'

interface DesignerListProps {
    designerList: User[]
}

const DesignerList: React.FC<DesignerListProps> = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)
    const {designerList} = props
    const [showModal, setModalVisibility] = useState(false) 
    const [currentDesigner, setCurrentDesigner] = useState<User>(undefined) 

    const onMoreInfo = (user: User) => {
        setCurrentDesigner(user)
        setModalVisibility(true)
    }

    const onConnect = async (designerId: string) => {
        window.analytics.track((currentUser as Employer).companyName + ' connects to designer');
        const comm = await createCommunication(designerId, currentUser.id)
        setModalVisibility(false)
        const newUser = {...currentUser, communications: [...currentUser.communications, comm.id]}
        changeUser(newUser)
    }

    return (
        <>
            <DesignerInfoModal setInvisible={() => setModalVisibility(false)}
                                visible={showModal}
                               designer={currentDesigner}
                               onConnect={onConnect}/>
            <List
                style={{width: '100%'}}
                dataSource={designerList}
                bordered
                renderItem={(designer) => {
                    return (
                        <List.Item>
                            <List.Item.Meta title={designer.firstName + " " + designer.lastName} description={"Score: " + designer.grade.score}/>
                            <Button onClick={() => onMoreInfo(designer)}>
                                More Info
                            </Button>
                        </List.Item>
                    )
                }}
            />
        </>)
}

export default DesignerList