import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import {myFirebase} from '../lib/firebase'
import {User, Employer, NavBarStatus} from '../model/model'
import {getUser, getEmployer} from '../lib/server'
import Router from 'next/router'
import {UserContext} from '../lib/UserProvider'
import Loading from '../components/General/Loading'
import LoginComponent from '../components/Login/LoginComponent';
import Head from 'next/head'
import styled from 'styled-components'
import {UNIVERSAL_BACKGROUND, UNIVERSAL_COLOR} from '../model/model'
import { LoginBackground } from '../components/Login/LoginFlowContainer'


const Index: React.FC = () => {

    useEffect(() => {
        window.analytics.page('Login')
    }, [])

    const onFinish = (values) => {
        myFirebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
            message.error("Looks like your password or email is incorrect.");
        }).then(() => {
            window.analytics.track('Login');
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