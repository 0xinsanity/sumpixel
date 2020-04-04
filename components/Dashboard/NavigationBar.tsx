import React, {useState, useContext} from 'react'
import {PageHeader, Button, Tabs, message} from 'antd'
import {myFirebase} from '../../lib/firebase'
import Router from 'next/router'
import Loading from '../General/Loading'
import { UserContext } from '../../lib/UserProvider'

const {TabPane} = Tabs

interface NavigationBarProps {
    title: string,
    subtitle: string
    footer: React.ReactNode
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    const {title, subtitle, footer} = props
    const {currentUser, changeUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    if (loading) {
        return (<Loading/>)
    }

    return (
        <PageHeader 
                title={title}
                subTitle={subtitle}
                extra={[
                    <Button type="primary" onClick={async () => {
                        setLoading(true)
                        myFirebase.auth().signOut().then(() => {
                            changeUser(undefined)
                            setLoading(false)
                            Router.replace('/')
                        }).catch((error) => {
                            message.error(error.message)
                        })
                    }}>
                        Logout
                    </Button>
                ]}
                footer={footer} />
    )
}

export default NavigationBar