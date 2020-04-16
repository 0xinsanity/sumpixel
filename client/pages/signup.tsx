import React, {useEffect, useState, useContext} from 'react'
import {message} from 'antd'
import {PopupModal} from '../components/General/PopupModal';
import {myFirebase} from '../lib/firebase'
import {Onboard} from '../components/OnboardingFlow/Onboard'
import { UserContext } from '../lib/UserProvider';
import Head from 'next/head'
import LoginComponent from '../components/Login/LoginComponent'
import { LoginBackground } from '../components/Login/LoginFlowContainer'
import OpenPage from '../components/General/OpenPage'
import Router from 'next/router'
import firebase from 'firebase'

const SignUp: React.FC = (props) => {
    const {currentUser, setLoading} = useContext(UserContext)
    useEffect(() => {
        myFirebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        if (currentUser !== undefined && currentUser !== null) {
            OpenPage(setLoading, '/onboarding')
        }
    }, [currentUser])

    useEffect(() => {
        window.analytics.page('Signup')
    }, [])

    const onFinish = (values) => {
        setLoading(true)
        myFirebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
            const displayName = `${values.firstName} ${values.lastName}`

            myFirebase.auth().currentUser.updateProfile({
                displayName: displayName
            }).then(() => {
                // Delays are necessary to ensure display name is updated correctly
                setTimeout(() => {
                    window.analytics.track('Firebase Auth Signup');
                    OpenPage(setLoading, '/onboarding')
                }, 1000)
            })
        }).catch((error) => {
            setLoading(false)
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