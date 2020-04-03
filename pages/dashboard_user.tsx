import React, {useEffect, useState} from 'react'
import {Tabs} from 'antd'
import {Container} from '../components/General/Container'
import NavigationBar from '../components/Dashboard/NavigationBar'
import ModifyProfile from '../components/Dashboard/Designer/ModifyProfile'
import ViewCommunications from '../components/Dashboard/Designer/ViewCommunications'
const {TabPane} = Tabs

const DashboardUser: React.FC = (props) => {
    // TODO: If user['completed_quiz'] is false, show screen that says, "Complete quiz first and then come back"

    return (
        <>
            <NavigationBar 
                title="Designer Dashboard" 
                subtitle="Modify Profile and View Communications" 
                footer={
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="View Communications" key="1">
                                <Container>
                                    <ViewCommunications />
                                </Container>
                            </TabPane>
                            <TabPane tab="Modify Profile" key="2">
                                <Container>
                                    <ModifyProfile />
                                </Container>
                            </TabPane>
                        </Tabs>
                }
            />
        </>
    );
};

export default DashboardUser;