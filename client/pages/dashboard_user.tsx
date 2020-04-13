import React, {useEffect, useState, useContext} from 'react'
import {Tabs, Spin} from 'antd'
import Loading from '../components/General/Loading'
import {Container} from '../components/General/Container'
import NavigationBar from '../components/Dashboard/NavigationBar'
import FormPersonalData from '../components/OnboardingFlow/Designers/FormPersonalData'
import ViewCommunications from '../components/Dashboard/Designer/ViewCommunications'
import {UserContext} from '../lib/UserProvider'
import {User} from '../model/model'
import {modifyUser} from '../lib/server'
import Head from 'next/head'
import {Background} from './dashboard_employer'
import OpenPage from '../components/General/OpenPage'
const {TabPane} = Tabs

interface TabWithCeilingProps {
    tab: string;
    key: string;
    children: React.ReactNode
}

const DashboardUser: React.FC = (props) => {
    const {currentUser, changeUser, setLoading, loading}  = useContext(UserContext)

    useEffect(() => {
        window.analytics.page('Designer Dashboard')
        setTimeout(() => {
            console.log('loadin' + loading)
            if (currentUser === undefined || currentUser === null) {
                OpenPage(setLoading, '/')
            }
        }, 3000)
    }, [])

    const updateUser = async (updatedUser: User) => {
        window.analytics.track('Modify Designer');
        changeUser(updatedUser)
        await modifyUser(updatedUser)
    }

    if (currentUser === undefined || currentUser === null) {
        return (<></>)
    }

    return (
        <>
            <Head>
                <title>Designer Dashboard</title>
            </Head>
            <NavigationBar 
                isDesigner={true}
                subtitle={`${currentUser.firstName}'s Dashboard`} 
                footer={
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={"Communications"} key={"1"}>
                                <Background>
                                    <Container isDashboard={true}>
                                        <ViewCommunications/>
                                    </Container>
                                </Background>
                            </TabPane>
                            <TabPane tab={"Modify Profile"} key={"2"}>
                                <Background>
                                    <div style={{display: 'flex', padding: 40, justifyContent: 'left'}}>
                                        <FormPersonalData changeCurrentUser={updateUser} modifyProfile={true} />
                                    </div>
                                </Background>
                            </TabPane>
                        </Tabs>
                }
            />
        </>
    );
};

export default DashboardUser;