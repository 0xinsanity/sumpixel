import React, {useEffect, useState, useContext} from 'react'
import {Tabs, Spin} from 'antd'
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
const {TabPane} = Tabs

const ContAbove = styled.div`
    width: 100%;
    border-top: 1px solid rgb(235, 237, 240);
`

interface TabWithCeilingProps {
    tab: string;
    key: string;
    children: React.ReactNode
}

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
                title={`${(currentUser as Employer).companyName}'s Dashboard`} 
                subtitle="Find New Employees, Manage Communications, and Modify Profile" 
                footer={
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={"Designers"} key={"1"}>
                                <ContAbove>
                                    <Container isDashboard={true}>
                                        <FindDesigners/>
                                    </Container>
                                </ContAbove>
                            </TabPane>
                            <TabPane tab={"Communications"} key={"2"}>
                                <ContAbove>
                                    <Container isDashboard={true}>
                                        <ManageCommunications/>
                                    </Container>
                                </ContAbove>
                            </TabPane>
                            <TabPane tab={"Profile"} key={"3"}>
                                <ContAbove>
                                    <Container isDashboard={true}>
                                        <FormBusinessData changeCurrentUser={updateEmployer} modifyProfile={true} />
                                    </Container>
                                </ContAbove>
                            </TabPane>
                        </Tabs>
                }
            />
        </>
    );
};

export default DashboardEmployer;