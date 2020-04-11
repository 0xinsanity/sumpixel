import React, {useEffect, useState, useContext} from 'react'
import {message} from 'antd'
import {PopupModal} from '../components/General/PopupModal';
import {myFirebase} from '../lib/firebase'
import {Onboard} from '../components/OnboardingFlow/Onboard'
import { UserContext } from '../lib/UserProvider';
import Head from 'next/head'
import LoginComponent from '../components/Login/LoginComponent'
import { LoginBackground } from '../components/Login/LoginFlowContainer'
import Router from 'next/router'

const SignUp: React.FC = (props) => {
    const {currentUser, changeUser} = useContext(UserContext)
    useEffect(() => {
        if (currentUser !== undefined && currentUser !== null) {
            Router.push('/onboarding')
        }
    }, [currentUser])

    useEffect(() => {
        window.analytics.page('Signup')
    }, [])

    const onFinish = (values) => {
        myFirebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
            myFirebase.auth().currentUser.updateProfile({
                displayName: `${values.firstName} ${values.lastName}`
            }).then(() => {
                window.analytics.track('Firebase Auth Signup');
                Router.push('/onboarding')
            })
        }).catch((error) => {
            message.error(error.message)
        })
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <LoginBackground>
                <LoginComponent isSignUp={true} title="Sign Up" onFinish={onFinish}/>
            </LoginBackground>
        </>
    );
};

export default SignUp;