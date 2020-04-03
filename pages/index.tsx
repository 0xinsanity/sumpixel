import React, {useContext, useState} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import {myFirebase} from '../lib/firebase'
import {User, Employer, NavBarStatus} from '../model/model'
import {getUser, getEmployer} from '../lib/server'
import Router from 'next/router'
import {UserContext} from '../lib/UserProvider'
import { Container } from '../components/Container';
import LoginComponent from '../components/LoginComponent';

const Index: React.FC = () => {
    const onFinish = (values) => {
        myFirebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
            message.error("Looks like your password or email is incorrect.");
        });
    }

    return (
        <Container>
            <div style={{paddingTop: '10%'}}>
                <LoginComponent title={"Login"} isSignUp={false} onFinish={onFinish} />
            </div>
        </Container>
    );
};

export default Index;