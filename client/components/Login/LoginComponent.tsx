import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import React, {useState, useContext} from 'react'
import {NavBarStatus} from '../../model/model'
import Router from 'next/router'
import { BigBlackButton } from '../General/BigBlackButton'
import styled from 'styled-components'
import {SumpixelCard} from '../General/SumpixelCard'
import { UserContext } from '../../lib/UserProvider'
import OpenPage from '../General/OpenPage'

interface LoginComponentProps {
    isSignUp: boolean
    onFinish: (values) => void
    title: string
}

const BottomText = styled(Typography.Text)`
    font-family: 'Mark Pro';
    font-weight: 500;
    padding-top: 10;
    text-align: center;
`

const LoginComponent: React.FC<LoginComponentProps> = (props) => {
    const context = useContext(UserContext)
    const {isSignUp, onFinish, title} = props

    const onClick = () => {
        if (isSignUp) {
            window.analytics.track('Go to Log In');
            Router.replace('/')
        } else {
            window.analytics.track('Go to Sign Up');
            Router.replace('/signup')
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <SumpixelCard style={{maxWidth: 450}} withLink={isSignUp}>
                <Form
                    hideRequiredMark={true}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    {isSignUp ? 
                            <Input.Group>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[{ required: true, message: 'First Name is required' }]}
                                >
                                    <Input placeholder="First Name"/>
                                </Form.Item>
                                <Form.Item
                                        label="Last Name"
                                        name="lastName"
                                        rules={[{ required: true, message: 'Last Name is required' }]}
                                    >
                                    <Input placeholder="Last Name"/>
                                </Form.Item>
                            </Input.Group>
                        
                    : null}

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Email is required' }]}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item
                        style={{marginBottom: 0}}
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Password is required' }]}
                    >
                        <Input type="password" placeholder="Password"/>
                    </Form.Item>
                    {!isSignUp ? 
                            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                                <Button style={{fontFamily: 'Mark Pro',
                                            color: "#000000",
                                            opacity: "0.5",
                                            textAlign: "right",
                                            fontSize: "12px",
                                            padding: "0"
                                        }} 
                                        onClick={() => {OpenPage(context.setLoading, '/forgotpassword')}} 
                                        type="link">                    
                                        Forgot Password.
                                </Button>
                            </div>
                        : null}

                    <Form.Item>
                        <Row justify="center">
                            <BigBlackButton style={{width: '60%', marginTop: 60}} type="primary" htmlType="submit">
                                {title}
                            </BigBlackButton>
                        </Row>
                    </Form.Item>
                </Form>
            </SumpixelCard>
            {!isSignUp ? 
                <BottomText>
                    Don't have an account? <Button onClick={onClick} style={{padding: 0, fontWeight: 'bold'}} type="link">Sign Up.</Button>
                </BottomText>
            : 
                <BottomText>
                    Already have an account? <Button onClick={onClick} style={{padding: 0, fontWeight: 'bold'}} type="link">Log In.</Button>
                </BottomText>
            }
        </div>
    )
}

export default LoginComponent