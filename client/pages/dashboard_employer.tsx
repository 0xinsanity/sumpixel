import React, {useEffect, useState, useContext, useRef} from 'react'
import {Tabs} from 'antd'
import Loading from '../components/General/Loading'
import {Container} from '../components/General/Container'
import NavigationBar from '../components/Dashboard/NavigationBar'
import FormBusinessData from '../components/OnboardingFlow/Employers/FormBusinessData'
import FindDesigners from '../components/Dashboard/Employer/FindDesigners'
import ManageCommunications from '../components/Dashboard/Employer/ManageCommunications'
import {UserContext} from '../lib/UserProvider'
import {Employer, UNIVERSAL_BACKGROUND} from '../model/model'
import { modifyEmployer} from '../lib/server'
import Head from 'next/head'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {myFirebase} from '../lib/firebase'
import firebase from 'firebase'
import OpenPage from '../components/General/OpenPage'
const {TabPane} = Tabs

const TabObjs = [{name: "Designers", key: "1"}, 
                {name: "Communications", key: "2"}, 
                {name: "Profile", key: "3"}]

export const Background = styled.div`
    background-color: ${UNIVERSAL_BACKGROUND};
    width: 100%;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: scroll;
`

const DashboardEmployer: React.FC = (props) => {
    const {currentUser, changeUser, setLoading}  = useContext(UserContext)
    const {asPath, query} = useRouter()
    const [isAnonymousHere, setAnonymous] = useState(false)

    // This is done to access isAnonymous value within timeout
    const anon = useRef(isAnonymousHere);
    anon.current = isAnonymousHere;
    useEffect(() => {
        window.analytics.page('Employer Dashboard')
        setTimeout(() => {
            // currentUser not updated so have to resort to custom state to prevent going back
            if (!anon.current && (currentUser === null || currentUser === undefined)) {
                OpenPage(setLoading, '/')
            }
        }, 3000)
        const anonymousLogin = async () => {
            console.log(asPath.substr(asPath.indexOf('=') + 1))
            console.log(query.id)
            if (asPath.substr(asPath.indexOf('=') + 1) === "60fff552-280b-47ae-b632-25a744a7a910") {
                console.log('gets here')
                console.log(asPath.substr(asPath.indexOf('=') + 1))
                myFirebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
                myFirebase.auth().signInAnonymously().then(() => {
                    console.log('currentuser ' + currentUser)
                    setAnonymous(true)
                    console.log('signed in anon')
                })
            }
        }
        anonymousLogin()
    }, [])

    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setLoading(false)
        }
    }, [currentUser])

    if (currentUser === null || currentUser === undefined) {
        return (<></>)
    }

    const updateEmployer = async (updatedUser: Employer) => {
        window.analytics.track('Modify Employer');
        changeUser(updatedUser)
        await modifyEmployer(updatedUser)
    }

    const isAnonymous = currentUser !== null && (currentUser as Employer).isAnonymous !== undefined
    console.log('anon: ' + isAnonymous)
    var footer: React.ReactNode
    if (isAnonymous) {
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
                            <div style={{display: 'flex', padding: 40, justifyContent: 'center'}}>
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
                subtitle={isAnonymous ? 'Dashboard' : `${currentUser.firstName}'s Dashboard`}
                footer={footer}
            />
        </>
    );
};

export default DashboardEmployer;