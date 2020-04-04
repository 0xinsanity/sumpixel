import React, {useState, useContext} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import _ from 'lodash'
import {User, VisaStatus, NavBarStatus, Employer} from '../../../model/model'
import FormProps from '../FormProps'
import {UploadFile} from 'antd/lib/upload/interface'
import {storage_ref, myFirebase} from '../../../lib/firebase'
import {removeUser} from '../../../lib/server'
import {UserContext} from '../../../lib/UserProvider'
import Loading from '../../General/Loading'
const {Option} = Select

interface FormBusinessDataProps extends FormProps {
    modifyProfile?: boolean
}

const FormBusinessData: React.FC<FormBusinessDataProps> = (props) => {
    const {changeCurrentUser, changeStep, changeNavbarStatus, modifyProfile} = props
    const {currentUser}  = useContext(UserContext)
    const isModifyProfilePage = modifyProfile !== undefined

    const goBack = async () => {
        await removeUser(currentUser.id)
        await myFirebase.auth().signOut()
        changeNavbarStatus(NavBarStatus.Undecided)
        changeStep(-1)
    }

    if (currentUser == undefined) {
        return (<Loading />)
    }

    const getRules = (name) => {
        return [{ required: !isModifyProfilePage, message: !isModifyProfilePage ? `${name} is required` : '' }]
    }

    const onFinish = (values) => {
        const newEmployer = {
            email: currentUser.email,
            id: currentUser.id,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            companyName: values.companyName,
            phoneNumber: values.phoneNumber,
            location: values.location
        }
        changeCurrentUser(_.pickBy(newEmployer, _.identity))
        if (isModifyProfilePage) {
            message.success("Your profile has been updated")
        } else {
            changeStep(1)
        }
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
            {!isModifyProfilePage ? 
            <>
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
            </>
            : null}
            

            <Form.Item
                label="Company Name"
                name="companyName"
                rules={getRules("Company Name")}
            >
                <Input defaultValue={modifyProfile ? '' : (currentUser as Employer).companyName || ""} placeholder="Company Name"/>
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={getRules("Phone Number")}
            >
                <Input defaultValue={modifyProfile ? '' : (currentUser as Employer).phoneNumber || ""} placeholder="+1 (555) 555-5555"/>
            </Form.Item>

            <Form.Item
                label="Location"
                name="location"
                rules={getRules("Location")}
            >
                <Input defaultValue={modifyProfile ? '' : (currentUser as Employer).location || ""} placeholder="New York City"/>
            </Form.Item>

            {!isModifyProfilePage ? 
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
            : null }

            <Form.Item>
                <Row justify="space-between" align="middle">
                    {!isModifyProfilePage ? 
                        <Button type="default" onClick={goBack}>
                            Back
                        </Button>
                    : null}
                    <Button type="primary" htmlType="submit">
                        {isModifyProfilePage ? "Update Company Profile" : "Finish Setup"}
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
}

export default FormBusinessData