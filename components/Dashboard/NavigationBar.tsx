import React from 'react'
import {PageHeader, Button, Tabs} from 'antd'
import {myFirebase} from '../../lib/firebase'
import Router from 'next/router'

const {TabPane} = Tabs

interface NavigationBarProps {
    title: string,
    subtitle: string
    footer: React.ReactNode
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    const {title, subtitle, footer} = props

    return (
        <PageHeader 
                style={{border: '1px solid rgb(235, 237, 240)'}}
                title={title}
                subTitle={subtitle}
                extra={[
                    <Button type="primary" onClick={async () => {
                        await myFirebase.auth().signOut()
                        Router.replace('/')
                    }}>
                        Logout
                    </Button>
                ]}
                footer={footer}
            />
    )
}

export default NavigationBar