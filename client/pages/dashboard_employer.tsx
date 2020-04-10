import React, {useEffect, useState, useContext} from 'react'
import {Tabs} from 'antd'
import Loading from '../components/General/Loading'
import {Container} from '../components/General/Container'
import NavigationBar from '../components/Dashboard/NavigationBar'
import FormBusinessData from '../components/OnboardingFlow/Employers/FormBusinessData'
import FindDesigners from '../components/Dashboard/Employer/FindDesigners'
import ManageCommunications from '../components/Dashboard/Employer/ManageCommunications'
import {UserContext} from '../lib/UserProvider'
import {Employer} from '../model/model'
import { modifyEmployer} from '../lib/server'
import Head from 'next/head'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {myFirebase} from '../lib/firebase'
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
    const {asPath, query} = useRouter()
    
    if (query.id === "60fff552-280b-47ae-b632-25a744a7a910" && currentUser === null) {
        console.log('gets here')
        myFirebase.auth().signInAnonymously()
    }

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

    var footer: React.ReactNode
    if ((currentUser as Employer).isAnonymous !== undefined) {
        footer = <Tabs tabBarGutter={40} defaultActiveKey="1">
                    <TabPane tab={TabObjs[0].name} key={TabObjs[0].key}>
                        <Background>
                            <Container isDashboard={true}>
                                <FindDesigners/>
                            </Container>
                        </Background>
                    </TabPane>
                </Tabs>
    } else {
        footer = <Tabs tabBarGutter={40} defaultActiveKey="1">
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

    return (
        <>
            <Head>
                <title>Employer Dashboard</title>
            </Head>
            <NavigationBar 
                isDesigner={false}
                subtitle={(currentUser as Employer).isAnonymous === undefined ? `${currentUser.firstName}'s Dashboard` : 'Temporary Dashboard'}
                footer={footer}
            />
        </>
    );
};

export default DashboardEmployer;