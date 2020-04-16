import React, {useState, useContext} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import _ from 'lodash'
import {User, VisaStatus, NavBarStatus, Employer, UNIVERSAL_COLOR} from '../../../model/model'
import FormProps from '../FormProps'
import {UploadFile} from 'antd/lib/upload/interface'
import {storage_ref, myFirebase} from '../../../lib/firebase'
import {removeUser} from '../../../lib/server'
import {UserContext} from '../../../lib/UserProvider'
import Loading from '../../General/Loading'
import {BigBlackButton} from '../../General/BigBlackButton'
import OpenPage from '../../General/OpenPage'
import {LocationAutocomplete} from '../../General/LocationAutocomplete'
const {Option} = Select

interface FormBusinessDataProps extends FormProps {
    modifyProfile?: boolean
}

const FormBusinessData: React.FC<FormBusinessDataProps> = (props) => {
    const {changeCurrentUser, modifyProfile} = props
    const {currentUser, changeUser, setLoading} = useContext(UserContext)
    const [checked, changeChecked] = useState(false)
    const isModifyProfilePage = modifyProfile !== undefined

    if (currentUser == undefined) {
        return (<Loading />)
    }

    const getRules = (name) => {
        return [{ required: !isModifyProfilePage, message: !isModifyProfilePage ? `${name} is required` : '' }]
    }

    const onFinish = (values) => {
        if (!isModifyProfilePage && !checked) {
            message.error('Please agree to the Terms of Service')
            return
        }

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
            OpenPage(setLoading, '/dashboard_employer')
        }
    }

    const onFinishFailed = () => {
        message.error('There was an error completing your account. Ensure every field is filled out.')
    }

    return (
        <Form
            id="employer_form"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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

            <LocationAutocomplete isModifyProfilePage={isModifyProfilePage} defaultValue={isModifyProfilePage ? '' : currentUser.location || ""}/>


            {!isModifyProfilePage ? 
            <Form.Item 
                valuePropName={'checked'}
                >
                    <Checkbox style={{fontFamily: 'Mark Pro'}} checked={checked} onChange={(e) => changeChecked(e.target.checked)}>Agree to the <a style={{color: UNIVERSAL_COLOR}} target={'_blank'} href={'/terms'}>Terms of Service</a></Checkbox>
            </Form.Item> 
            : null }
            {isModifyProfilePage ?
            <Form.Item>
                <Row justify="space-between" align="middle">
                    
                    <BigBlackButton style={{marginTop: 10}} htmlType="submit">
                        {isModifyProfilePage ? "Update Company Profile" : "Finish Setup"}
                    </BigBlackButton>
                </Row>
            </Form.Item> : null}
        </Form>
    );
}

export default FormBusinessData