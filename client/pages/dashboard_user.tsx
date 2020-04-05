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
const {TabPane} = Tabs

interface TabWithCeilingProps {
    tab: string;
    key: string;
    children: React.ReactNode
}

const DashboardUser: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)

    const updateUser = async (updatedUser: User) => {
        changeUser(updatedUser)
        await modifyUser(updatedUser)
    }

    if (currentUser === undefined || currentUser === null) {
        return (<Loading />)
    }

    return (
        <NavigationBar 
            title={`${currentUser.firstName} ${currentUser.lastName}'s Dashboard`} 
            subtitle="Modify Profile and View Communications" 
            footer={
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={"Communications"} key={"1"}>
                            <div style={{borderTop: '1px solid rgb(235, 237, 240)'}}>
                                <Container isDashboard={true}>
                                    <ViewCommunications/>
                                </Container>
                            </div>
                        </TabPane>
                        <TabPane tab={"Profile"} key={"2"}>
                            <div style={{borderTop: '1px solid rgb(235, 237, 240)'}}>
                                <Container isDashboard={true}>
                                    <FormPersonalData changeCurrentUser={updateUser} modifyProfile={true} />
                                </Container>
                            </div>
                        </TabPane>
                    </Tabs>
            }
        />
    );
};

export default DashboardUser;