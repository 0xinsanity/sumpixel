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

const TabWithCeiling: React.FC<TabWithCeilingProps> = props => {
    return (
        <TabPane tab={props.tab} key={props.key}>
            <div style={{width: '100%', borderTop: '1px solid rgb(235, 237, 240)'}}>
                <Container>
                    {props.children}
                </Container>
            </div>
        </TabPane>
    )
}

const DashboardUser: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)

    const updateUser = async (updatedUser: User) => {
        changeUser(updatedUser)
        await modifyUser(updatedUser)
    }


    if (currentUser === null) {
        return (<Loading />)
    }

    // TODO: If user['completed_quiz'] is false, show screen that says, "Complete quiz first and then come back"

    return (
        <NavigationBar 
            title={`${currentUser.firstName} ${currentUser.lastName}'s Dashboard`} 
            subtitle="Modify Profile and View Communications" 
            footer={
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={"View Communications"} key={"1"}>
                            <div style={{borderTop: '1px solid rgb(235, 237, 240)'}}>
                                <Container isDashboard={true}>
                                    <ViewCommunications/>
                                </Container>
                            </div>
                        </TabPane>
                        <TabPane tab={"Modify Profile"} key={"2"}>
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