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

const Onboarding: React.FC = (props) => {
    const {currentUser, changeUser, setLoading} = useContext(UserContext)
    useEffect(() => {
        window.analytics.page('Onboarding')
    }, [])

    const deleteUser = async () => {
        window.analytics.track('Go Back - Delete Firebase User');
        setTimeout(async () => await myFirebase.auth().currentUser.delete(), 1000)
        changeUser(undefined)
        OpenPage(setLoading, '/signup')
    }

    return (
        <>
            <Head>
                <title>Onboarding</title>
            </Head>
            <div style={{backgroundColor: '#fff', position: 'absolute', width: '100%', height: '100%'}}>
                <Onboard deleteUser={deleteUser}/>
            </div>
        </>
    );
};

export default Onboarding;