import React from 'react'
import {PageHeader, Button, Tabs, message, Typography} from 'antd'
import styled from 'styled-components'

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
}

const SimpleNavigationBar: React.FC<NavigationBarProps> = (props) => {
    const {subtitle} = props

    return (
        <SumpixelHeader 
                title={ <a href={'/'}>
                            <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
                        </a>}
            >
            <Line/>            
            <SubTitle>{subtitle}</SubTitle>
            {props.children}
        </SumpixelHeader>
    )
}

export default SimpleNavigationBar