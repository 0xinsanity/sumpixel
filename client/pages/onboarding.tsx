import React, {useEffect, useState, useContext} from 'react'
import {message} from 'antd'
import {PopupModal} from '../components/General/PopupModal';
import {myFirebase} from '../lib/firebase'
import {Onboard} from '../components/OnboardingFlow/Onboard'
import { UserContext } from '../lib/UserProvider';
import Head from 'next/head'
import LoginComponent from '../components/Login/LoginComponent'
import Router from 'next/router'
import OpenPage from '../components/General/OpenPage';
import { LoginBackground } from '../components/Login/LoginFlowContainer';

const Onboarding: React.FC = (props) => {
    const {currentUser, changeUser, setLoading} = useContext(UserContext)
    useEffect(() => {
        window.analytics.page('Onboarding')
    }, [])

    const deleteUser = async () => {
        window.analytics.track('Go Back - Delete Firebase User');
        await myFirebase.auth().currentUser.delete()
        changeUser(null)
        OpenPage(setLoading, '/signup')
    }

    return (
        <>
            <Head>
                <title>Onboarding</title>
            </Head>
            <LoginBackground style={{alignItems: 'flex-start', paddingTop: 80, height: 'auto', minHeight: '100vh', paddingBottom: 65}}>
                <Onboard deleteUser={deleteUser}/>
            </LoginBackground>
        </>
    );
};

export default Onboarding;