import React, {useContext, useState} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import {myFirebase} from '../lib/firebase'
import {User, Employer, NavBarStatus} from '../model/model'
import {getUser, getEmployer} from '../lib/server'
import Router from 'next/router'
import {UserContext} from '../lib/UserProvider'
import { Container } from '../components/General/Container';
import Loading from '../components/General/Loading'
import LoginComponent from '../components/Login/LoginComponent';
import Head from 'next/head'

const Index: React.FC = () => {
    const [loading, setLoading] = useState(false)

    if (loading) {
        return (<Loading />)
    }

    const onFinish = (values) => {
        setLoading(true)
        myFirebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
            setLoading(false)
            message.error("Looks like your password or email is incorrect.");
        }).then(() => {
            setLoading(false)
        });
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container>
                <div style={{paddingTop: '10%'}}>
                    <LoginComponent title={"Login"} isSignUp={false} onFinish={onFinish} />
                </div>
            </Container>
        </>
    );
};

export default Index;