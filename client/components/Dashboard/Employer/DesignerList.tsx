import React, {useEffect, useContext, useState} from 'react'
import { createCommunication } from '../../../lib/server'
import { User, Employer, UNIVERSAL_COLOR } from '../../../model/model'
import {UserContext} from '../../../lib/UserProvider'
import {Container} from '../../General/Container'
import Loading from '../../General/Loading'
import {Table, Button, Typography} from 'antd'
import DesignerInfoModal from './DesignerInfoModal'
import styled from 'styled-components'
import {BigBlackButton} from '../../General/BigBlackButton'
const {Column} = Table

const NameTitle = styled(Typography)`
    color: #000000;
    font-family: 'Mark Pro Bold';
    font-size: 16px;
`

const ResponseTitle = styled(Typography)`
    color: #000000;
    opacity: 0.5;
    font-size; 14px;
    font-family: 'Mark Pro';
`

export interface FindDesignerListType {
    name_feedback: string[],
    score: number,
    expiration: string,
    primary_skill: string,
    contact: User
}

interface DesignerListProps {
    designerList: FindDesignerListType[]
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
            <Table
                style={{paddingBottom: 10, width: '100%', fontFamily: 'Mark Pro', fontWeight: 'normal'}}
                size={"large"}
                dataSource={designerList}
                bordered={false}
            >
                <Column onCell={(data, index) => ({style: {fontFamily: 'Mark Pro Bold'}})}  width={'35%'} title="Name" dataIndex="name_feedback" key="name_feedback" render={(name_feedback) => (
                    <>
                        <NameTitle>{name_feedback[0]}</NameTitle>
                        <ResponseTitle>{name_feedback[1]}</ResponseTitle>
                    </>
                )}/>
                <Column onCell={(data, index) => ({style: {color: UNIVERSAL_COLOR, fontWeight: 700}})} align={'center'} title="Score" dataIndex="score" key="score" />
                <Column align={'center'} title="Expiration" dataIndex="expiration" key="expiration" />
                <Column align={'center'} title="Primary Skill" dataIndex="primary_skill" key="primary_skill" />
                <Column align={'center'} title="Contact" dataIndex="contact" key="contact" render={(contact) => (
                    <BigBlackButton onClick={() => onMoreInfo(contact)}>
                        Request Call
                    </BigBlackButton>
                )} />
            </Table>
        </>)
}

export default DesignerList