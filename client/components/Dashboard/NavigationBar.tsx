import React, {useState, useContext} from 'react'
import {PageHeader, Button, Tabs, message, Typography} from 'antd'
import {myFirebase} from '../../lib/firebase'
import Router from 'next/router'
import Loading from '../General/Loading'
import {Employer} from '../../model/model'
import { UserContext } from '../../lib/UserProvider'
import styled from 'styled-components'

const {TabPane} = Tabs

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
    footer: React.ReactNode
    isDesigner?: boolean
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    const {subtitle, footer, isDesigner} = props
    const {currentUser, changeUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    if (loading) {
        return (<Loading/>)
    }

    return (
        <SumpixelHeader 
                title={ <a href={isDesigner ? '/dashboard_user' : '/dashboard_employer'}>
                            <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
                        </a>}
                extra={[
                    <LogoutButton type="link" onClick={async () => {
                        myFirebase.auth().signOut().then(() => {
                            changeUser(undefined)
                            setLoading(false)
                            if ((currentUser as Employer).isAnonymous !== undefined) {
                                Router.replace('/signup')
                            } else {
                                Router.replace('/')
                            }
                        }).catch((error) => {
                            message.error(error.message)
                        })
                    }}>
                        {(currentUser as Employer).isAnonymous === undefined ? 'Log Out' : 'Create Account To Start Connecting With Designers'}
                    </LogoutButton>
                ]}
                footer={footer}>
            <Line/>            
            <SubTitle>{subtitle}</SubTitle>
        </SumpixelHeader>
    )
}

export default NavigationBar