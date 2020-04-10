import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import {myFirebase} from '../lib/firebase'
import Loading from '../components/General/Loading'
import LoginComponent from '../components/Login/LoginComponent';
import Head from 'next/head'
import { LoginBackground } from '../components/Login/LoginFlowContainer'
import ForgotPasswordComponent from '../components/Login/ForgotPasswordComponent'

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.analytics.page('Forgot Password')
    }, [])

    if (loading) {
        return (<Loading />)
    }

    const onFinish = (values) => {
        setLoading(true)
        myFirebase.auth().sendPasswordResetEmail(values.email).then(function() {
            setLoading(false)
            window.analytics.track('Reset Password email sent.');
            message.success("Reset Password email sent.");
        }).catch(function(error) {
            setLoading(false)
            message.error("There was a problem sending the email. Make sure the email you inputted is correct.");
        });
    }

    return (
        <>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <LoginBackground>
                <ForgotPasswordComponent onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default ForgotPassword;