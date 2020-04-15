import React, {useContext, useEffect} from 'react'
import {message} from 'antd'
import {myFirebase} from '../lib/firebase'
import {UserContext} from '../lib/UserProvider'
import LoginComponent from '../components/Login/LoginComponent';
import Head from 'next/head'
import { LoginBackground } from '../components/Login/LoginFlowContainer'
import OpenPage from '../components/General/OpenPage'
import firebase from 'firebase'

const Index: React.FC = () => {
    const {currentUser, changeUser, loading, setLoading}  = useContext(UserContext)

    useEffect(() => {
        myFirebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        if (currentUser !== undefined && currentUser !== null) {
            if (currentUser['companyName'] !== undefined) {
                console.log('here2')
                OpenPage(setLoading, '/dashboard_employer')
            } else {
                console.log('here3')
                OpenPage(setLoading, '/dashboard_user')
            }
        }
    }, [currentUser])

    useEffect(() => {
        window.analytics.page('Login')
    }, [])

    const onFinish = (values) => {
        myFirebase.auth().signInWithEmailAndPassword(values.email, values.password).then(() => {
            setLoading(true)
            window.analytics.track('Login');
        }).catch(error => {
            console.log(error)
            setLoading(false)
            message.error("Looks like your password or email is incorrect.");
        });
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LoginBackground>
                <LoginComponent title={"Login"} isSignUp={false} onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default Index;