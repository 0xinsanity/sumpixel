import React, {useEffect, useState, useContext} from 'react'
import {message} from 'antd'
import {PopupModal} from '../components/General/PopupModal';
import {myFirebase} from '../lib/firebase'
import {Onboard} from '../components/OnboardingFlow/Onboard'
import { UserContext } from '../lib/UserProvider';
import Head from 'next/head'
import LoginComponent from '../components/Login/LoginComponent'
import Router from 'next/router'

const Onboarding: React.FC = (props) => {
    const {currentUser, changeUser} = useContext(UserContext)
    useEffect(() => {
        window.analytics.page('Onboarding')
    }, [])

    const deleteUser = async () => {
        window.analytics.track('Go Back - Delete Firebase User');
        setTimeout(async () => await myFirebase.auth().currentUser.delete(), 1000)
        changeUser(undefined)
        Router.push('/signup')
    }

    return (
        <>
            <Head>
                <title>Onboarding</title>
            </Head>
            <Onboard deleteUser={deleteUser}/>
        </>
    );
};

export default Onboarding;