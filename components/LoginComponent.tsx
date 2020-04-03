import {Card, Form, Input, Button, Row, Radio, Col, } from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import React, {useState} from 'react'
import {NavBarStatus} from '../model/model'
import Router from 'next/router'

interface LoginComponentProps {
    isSignUp: boolean
    onFinish: (values) => void
    title: string
}

const LoginComponent: React.FC<LoginComponentProps> = (props) => {
    const {isSignUp, onFinish, title} = props
    const [status, setStatus] = useState<NavBarStatus>(NavBarStatus.Undecided)

    const updateStatus = ({newStatus}) => {
        setStatus(newStatus)
    }

    const onClick = () => {
        Router.replace('/signup')
    }

    return (
        <Card title={title}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onValuesChange={updateStatus}
                style={{marginBottom: 50}}
            >

                {isSignUp ? 
                    
                        <Input.Group>
                            <Row>
                                <Col span={11}>
                                    <Form.Item
                                        label="First Name"
                                        name="firstName"
                                        rules={[{ required: true, message: 'Location is required' }]}
                                    >
                                        <Input placeholder="First Name"/>
                                    </Form.Item>
                                </Col>
                                <Col span={2}/>
                                <Col span={11}>
                                    <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                            rules={[{ required: true, message: 'Location is required' }]}
                                        >
                                        <Input placeholder="Last Name"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Input.Group>
                    
                : null}

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Location is required' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Location is required' }]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>

                {!isSignUp ? <Form.Item label="You are" name="newStatus">
                    <Radio.Group value={status}>
                        <Radio.Button value={NavBarStatus.Employer}>Employer</Radio.Button>
                        <Radio.Button value={NavBarStatus.Designer}>Designer</Radio.Button>
                    </Radio.Group>
                </Form.Item> : null}

                <Form.Item>
                    <Row justify="center">
                        <Button style={{width: '60%'}} type="primary" htmlType="submit">
                            {title}
                        </Button>
                    </Row>
                    {!isSignUp ? <Button onClick={onClick} style={{paddingTop: 10}} type="link">
                            Haven't made an account? Click here to sign up
                    </Button> : null}
                </Form.Item>
            </Form>
        </Card>
    )
}

export default LoginComponent