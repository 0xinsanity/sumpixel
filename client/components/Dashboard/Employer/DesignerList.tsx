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
import Router from 'next/router'
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
    const {designerList} = props

    const onMoreInfo = (user: User) => {
        Router.push('/profile/' + user.id)
    }

    return (
        <>
            <Table
                style={{paddingBottom: 10, width: '100%', fontFamily: 'Mark Pro', fontWeight: 'normal'}}
                size={"large"}
                dataSource={designerList}
                bordered={false}
                pagination={{defaultPageSize: 10}}
            >
                <Column onCell={(data, index) => ({style: {fontFamily: 'Mark Pro Bold'}})}  width={'35%'} title="Name" dataIndex="name_feedback" key="name_feedback" render={(name_feedback) => (
                    <>
                        <NameTitle>{name_feedback[0]}</NameTitle>
                        <ResponseTitle>{name_feedback[1]}</ResponseTitle>
                    </>
                )}/>
                <Column align={'center'} title="Score" dataIndex="score" key="score" render={(text) => (
                    <Typography.Text style={{color: UNIVERSAL_COLOR}}><Typography.Text style={{color: UNIVERSAL_COLOR, fontFamily: 'Mark Pro Bold'}}>{text}</Typography.Text>/10</Typography.Text>
                )} />
                <Column align={'center'} title="Location" dataIndex="location" key="location" />
                <Column align={'center'} title="Primary Skill" dataIndex="primary_skill" key="primary_skill" />
                <Column align={'center'} title="Profile" dataIndex="contact" key="contact" render={(contact) => (
                    <BigBlackButton onClick={() => onMoreInfo(contact)}>
                        Connect
                    </BigBlackButton>
                )} />
            </Table>
        </>)
}

export default DesignerList