import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import React, {useState} from 'react'
import {NavBarStatus} from '../../model/model'
import Router from 'next/router'
import { BigBlackButton } from '../General/BigBlackButton'
import styled from 'styled-components'
import {SumpixelCard} from '../General/SumpixelCard'

const TextContainer = styled(Typography.Text)`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 56px;
    font-family: 'Mark Pro';
    padding-right: 25px;
    padding-left: 25px;
`

interface LoginComponentProps {
    onFinish: (values) => void
}

const ForgotPasswordComponent: React.FC<LoginComponentProps> = (props) => {
    const {onFinish} = props

    const onClick = () => {
        window.analytics.track('Go to Sign Up');
        Router.replace('/signup')
    }

    return (
        <SumpixelCard withLink={true}>
            <Form
                hideRequiredMark={true}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <TextContainer>
                    <Typography.Text>We'll send a link to reset your</Typography.Text>
                    <Typography.Text>password for your account</Typography.Text>
                </TextContainer>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Email is required' }]}
                >
                    <Input placeholder="Email"/>
                </Form.Item>

                <Form.Item>
                    <Row justify="center">
                        <BigBlackButton style={{width: '60%', marginTop: 90}} type="primary" htmlType="submit">
                            Reset
                        </BigBlackButton>
                    </Row>
                </Form.Item>
            </Form>
        </SumpixelCard>
    )
}

export default ForgotPasswordComponent