import React, {useContext} from 'react'
import {PageHeader, Button, Tabs, message, Typography, Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import {UserContext} from '../../lib/UserProvider'
import { Employer } from '../../model/model'

const SumpixelHeader = styled(PageHeader)`
    background: #DAE2EF;
    padding: 30px 8%;
    min-height: 100vh;
`

const LogoutButton = styled(Button)`
    color: #000000;
    padding-top: 10px;
    font-family: 'Mark Pro Bold';
`
const Line = styled.div`
    border: 0.5px solid #000000;
    margin-top: 10px;
    margin-bottom: 10px;
`

const SubTitle = styled(Typography.Title)`
    font-family: 'Mark Pro Bold';
    padding-top: 20px;
    padding-bottom: 10px;
`

interface NavigationBarProps {
    subtitle: string
    avatarSrc?: string
}

const SimpleNavigationBar: React.FC<NavigationBarProps> = (props) => {
    const {subtitle, avatarSrc} = props

    return (
        <SumpixelHeader 
                title={ <a href={'/'}>
                            <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
                        </a>}
            >
            <Line/> 
            <Avatar style={{marginTop: 20}} size={200} icon={<UserOutlined/>} src={avatarSrc}/>           
            <SubTitle>{subtitle}</SubTitle>
            {props.children}
        </SumpixelHeader>
    )
}

export default SimpleNavigationBar