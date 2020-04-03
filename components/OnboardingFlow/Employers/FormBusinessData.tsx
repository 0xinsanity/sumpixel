import React, {useState, useContext} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import _ from 'lodash'
import {User, VisaStatus, NavBarStatus} from '../../../model/model'
import FormProps from '../FormProps'
import {UploadFile} from 'antd/lib/upload/interface'
import {storage_ref, myFirebase} from '../../../lib/firebase'
import {removeUser} from '../../../lib/server'
import {UserContext} from '../../../lib/UserProvider'
const {Option} = Select

const FormBusinessData: React.FC<FormProps> = (props) => {
    const {changeCurrentUser, changeStep, changeNavbarStatus} = props
    const {currentUser}  = useContext(UserContext)
    const [fileList, updateFileList] = useState<UploadFile[]>([])

    const goBack = async () => {
        await removeUser(currentUser.id)
        await myFirebase.auth().signOut()
        changeNavbarStatus(NavBarStatus.Undecided)
        changeStep(-1)
        
    }

    if (currentUser == undefined) {
        return (<></>)
    }

    const onFinish = (values) => {
        const newEmployer = {
            email: currentUser.email,
            id: currentUser.id,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            phoneNumber: values.phoneNumber,
            location: values.location
        }
        changeCurrentUser(newEmployer)
        changeStep(1)
    }

    const onFinishFailed = () => {
        message.error('There was an error completing your account. Ensure every field is filled out.')
    }

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{marginBottom: 50}}
        >
            <Form.Item
                label="Name"
                name="firstName"
            >
                <Input.Group>
                    <Row>
                        <Col span={11}>
                            <Input disabled defaultValue={currentUser.firstName}/>
                        </Col>
                        <Col span={2}/>
                        <Col span={11}>
                            <Input disabled defaultValue={currentUser.lastName}/>
                        </Col>
                    </Row>
                </Input.Group>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
            >
                <Input disabled defaultValue={currentUser.email}/>
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: 'Phone Number is required' }]}
            >
                <Input defaultValue={currentUser.phoneNumber || ""} placeholder="+1 (555) 555-5555"/>
            </Form.Item>

            <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Location is required' }]}
            >
                <Input defaultValue={currentUser.location || ""} placeholder="New York City"/>
            </Form.Item>

            <Form.Item 
                rules={[{
                    required: true,
                    transform: value => (value || undefined),
                    type: 'boolean',                          
                    message: 'Please agree to the terms and conditions.',
                }]}
                valuePropName={'checked'}
                >
                    {/* TODO: Requirement Not Working */}
                    <Checkbox>Agree to The Terms and Services</Checkbox>
            </Form.Item>

            <Form.Item>
                <Row justify="space-between" align="middle">
                    <Button type="default" onClick={goBack}>
                        Back
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Finish Setup
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
}

export default FormBusinessData