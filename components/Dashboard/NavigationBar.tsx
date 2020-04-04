import React, {useState} from 'react'
import {PageHeader, Button, Tabs} from 'antd'
import {myFirebase} from '../../lib/firebase'
import Router from 'next/router'
import Loading from '../General/Loading'

const {TabPane} = Tabs

interface NavigationBarProps {
    title: string,
    subtitle: string
    footer: React.ReactNode
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    const {title, subtitle, footer} = props
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
                        await myFirebase.auth().signOut()
                        setLoading(false)
                        Router.replace('/')
                    }}>
                        Logout
                    </Button>
                ]}
                footer={footer} />
    )
}

export default NavigationBar