import React, {useEffect, useState, useContext} from 'react'
import {Tabs} from 'antd'
import Loading from '../components/General/Loading'
import {Container} from '../components/General/Container'
import NavigationBar from '../components/Dashboard/NavigationBar'
import FormBusinessData from '../components/OnboardingFlow/Employers/FormBusinessData'
import FindDesigners from '../components/Dashboard/Employer/FindDesigners'
import ManageCommunications from '../components/Dashboard/Employer/ManageCommunications'
import {UserContext} from '../lib/UserProvider'
import {Employer, UNIVERSAL_COLOR} from '../model/model'
import { modifyEmployer} from '../lib/server'
import Head from 'next/head'
import styled from 'styled-components'
const {TabPane} = Tabs

const TabObjs = [{name: "Designers", key: "1"}, 
                {name: "Communications", key: "2"}, 
                {name: "Profile", key: "3"}]

export const Background = styled.div`
    background-color: #f7f9fb;
    width: 100%;
`

const DashboardEmployer: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)

    useEffect(() => {
        window.analytics.page('Employer Dashboard')
    }, [])

    const updateEmployer = async (updatedUser: Employer) => {
        window.analytics.track('Modify Employer');
        changeUser(updatedUser)
        await modifyEmployer(updatedUser)
    }

    if (currentUser === undefined || currentUser === null) {
        return (<Loading />)
    }

    return (
        <>
            <Head>
                <title>Employer Dashboard</title>
            </Head>
            <NavigationBar 
                isDesigner={false}
                subtitle={`${currentUser.firstName}'s Dashboard`}
                footer={
                        <Tabs tabBarGutter={40} defaultActiveKey="1">
                            <TabPane tab={TabObjs[0].name} key={TabObjs[0].key}>
                                <Background>
                                    <Container isDashboard={true}>
                                        <FindDesigners/>
                                    </Container>
                                </Background>
                            </TabPane>
                            <TabPane tab={TabObjs[1].name} key={TabObjs[1].key}>
                                <Background>
                                    <Container isDashboard={true}>
                                        <ManageCommunications/>
                                    </Container>
                                </Background>
                            </TabPane>
                            <TabPane tab={TabObjs[2].name} key={TabObjs[2].key}>
                                <Background>
                                    <div style={{display: 'flex', padding: 40, justifyContent: 'left'}}>
                                        <FormBusinessData changeCurrentUser={updateEmployer} modifyProfile={true} />
                                    </div>
                                </Background>
                            </TabPane>
                        </Tabs>
                }
            />
        </>
    );
};

export default DashboardEmployer;