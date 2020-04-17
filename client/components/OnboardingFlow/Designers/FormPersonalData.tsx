import React, {useState, useContext} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Radio, Avatar } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import _ from 'lodash'
import {User, VisaStatus, NavBarStatus, UNIVERSAL_COLOR, PricingModel} from '../../../model/model'
import FormProps from '../FormProps'
import {UploadFile} from 'antd/lib/upload/interface'
import {storage_ref, myFirebase} from '../../../lib/firebase'
import {removeUser} from '../../../lib/server'
import {UserContext} from '../../../lib/UserProvider'
import Loading from '../../General/Loading'
import {BigBlackButton} from '../../General/BigBlackButton'
import Router from 'next/router';
import OpenPage from '../../General/OpenPage'
import {RButton} from '../EmployerDesigner'
import styled from 'styled-components'
import MaskedInput from 'antd-mask-input'
import {LocationAutocomplete} from '../../General/LocationAutocomplete'
import {AvatarUpload} from './AvatarUpload'
const {Option} = Select

const VerticalRButton = styled(RButton)`
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 16px;
`

interface FormPersonalDataProps extends FormProps {
    modifyProfile?: boolean
}

const FormPersonalData: React.FC<FormPersonalDataProps> = (props) => {
    const {changeCurrentUser, modifyProfile} = props
    const isModifyProfilePage = modifyProfile !== undefined
    const {currentUser, changeUser, loading, setLoading}  = useContext(UserContext)
    const [checked, changeChecked] = useState(false)
    const [fileList, updateFileList] = useState<UploadFile[]>([])
    const [profilePic, changeProfilePic] = useState<File>(undefined)

    if (currentUser == undefined) {
        return (<Loading />)
    }

    const getRules = (name) => {
        return [{ required: !isModifyProfilePage, message: !isModifyProfilePage ? `${name} is required` : '' }]
    }

    const updateUser = (values) => {
        const newUser = {
            email: currentUser.email,
            id: currentUser.id,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            phoneNumber: values.phoneNumber,
            location: values.location,
            salary: values.salary,
            portfolio: values.portfolio,
            preferredRole: values.preferredRole,
            visa: values.visa_status,
            resume: currentUser.id + '.pdf',
            linkedin: values.linkedin,
            dribbble: values.dribbble
        }

        if (profilePic !== undefined) {
            newUser["profilePic"] = currentUser.id + ".png"
        }
        console.table(_.pickBy(newUser, _.identity))

        changeCurrentUser(_.pickBy(newUser, _.identity))

        if (isModifyProfilePage) {
            message.success("Profile Updated")
        } else {
            OpenPage(setLoading, '/dashboard_user')
        }
    }

    const onFinish = (values) => {
        if (!isModifyProfilePage && !checked) {
            message.error('Please agree to the Terms of Service')
            return
        }

        const res = values.resume
        console.log(res)
        if (res === undefined) {
            updateUser(values)
        } else {
            storage_ref.child('resumes/' + currentUser.id + '.pdf').put(res.file["originFileObj"]).then((snapshot) => {
                updateUser(values)
            })
        }    

        if (profilePic === undefined) {
            updateUser(values)
        } else {
            storage_ref.child('profilePic/' + currentUser.id + '.png').put(profilePic).then((snapshot) => {
                updateUser(values)
            })
        }
    }

    const viewProfile = () => {
        OpenPage(setLoading, '/profile/' + currentUser.id)
    }

    const onFinishFailed = (values) => {
        console.table(values)
        message.error('There was an error completing your account. Ensure every field is filled out.')
    }

    return (
            <Form
                id="designer_form"
                name="basic"
                initialValues={{ remember: true }}
                style={{marginBottom: 50}}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
            >
                <Form.Item
                    label=""
                    name="profilePic"
                >   
                    <div style={{width: '100%', justifyContent: 'center', display: 'flex' }}>
                        <AvatarUpload changeProfilePic={(profilePic: File) => changeProfilePic(profilePic)}/>
                    </div>
                </Form.Item>
                {!isModifyProfilePage ? 
                    <>
                        <Input.Group>
                            <Row>
                                <Col span={11}>
                                    <Form.Item
                                        label="First Name"
                                        name="firstName"
                                    >
                                        <Input disabled placeholder="First Name" defaultValue={currentUser.firstName}/>
                                    </Form.Item>
                                </Col>
                                <Col span={2}/>
                                <Col span={11}>
                                    <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                    >
                                        <Input disabled placeholder="Last Name" defaultValue={currentUser.lastName}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Input.Group>

                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input disabled defaultValue={currentUser.email}/>
                        </Form.Item>
                    </>
                : null}

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={getRules("Phone Number")}
                >
                    <MaskedInput mask="+1 (111) 111-1111" defaultValue={isModifyProfilePage ? '' : currentUser.phoneNumber || ""} placeholder="+1 (555) 555-5555"/>
                </Form.Item>

                <LocationAutocomplete isModifyProfilePage={isModifyProfilePage} defaultValue={isModifyProfilePage ? '' : currentUser.location || ""}/>

                <Form.Item
                    label="Salary"
                    name="salary"
                    rules={getRules("Salary")}
                >

                    <Radio.Group buttonStyle="solid" style={{width: '100%'}}>
                        <VerticalRButton value={PricingModel.SMALL}>{PricingModel.SMALL}</VerticalRButton>
                        <VerticalRButton value={PricingModel.MEDIUM}>{PricingModel.MEDIUM}</VerticalRButton>
                        <VerticalRButton value={PricingModel.LARGE}>{PricingModel.LARGE}</VerticalRButton>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Preferred Role"
                    name="preferredRole"
                    rules={getRules("Preferred Role")}
                >
                    <Input defaultValue={isModifyProfilePage ? '' : (currentUser as User).preferredRole || ""} placeholder="Senior UI Designer"/>
                </Form.Item>

                <Form.Item
                    label="Portfolio"
                    name="portfolio"
                    rules={getRules("Portfolio")}
                >
                    <Input defaultValue={isModifyProfilePage ? '' : (currentUser as User).portfolio || ""} placeholder="https://www.myportfolio.com"/>
                </Form.Item>

                <Form.Item
                    label="Visa Status"
                    name="visa_status"
                    rules={getRules("Visa Status")}
                    
                >
                    <Select defaultValue={modifyProfile ? '' : (currentUser as User).visa || ""} placeholder="Select an option:">
                        {_.map(VisaStatus, (status) => {
                            return <Option style={{fontFamily: 'Mark Pro'}} value={status}>{status}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Resume"
                    name="resume"
                    rules={getRules("Resume")}
                >
                    <Upload 
                        name={'file'} 
                        accept={".pdf"} 
                        fileList={fileList}
                        onChange={(info) => {
                            let fileList_update = [...info.fileList];
                            fileList_update = fileList_update.slice(-1);

                            fileList_update = fileList_update.map(file => {
                                if (file.response) {
                                    file.url = file.response.url;
                                }
                                if (file.status === 'error') {
                                    // TODO: Find better way of handling this
                                    file.status = 'done'
                                }
                                return file;
                            });

                            if (info.file.status === 'done') {
                                message.success(`${info.file.name} file uploaded successfully`);
                            } else if (info.file.status === 'error') {
                                message.success(`${info.file.name} file uploaded successfully`);
                            }

                            updateFileList(fileList_update)
                        }}>
                        <Button style={{width: '100%', fontFamily: 'Mark Pro'}}>
                            <UploadOutlined /> {!isModifyProfilePage ? "Click to Upload" : "Upload New Resume"}
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="LinkedIn"
                    name="linkedin"
                >
                    <Input defaultValue={modifyProfile ? '' : (currentUser as User).linkedin || ""} placeholder="https://www.linkedin.com/in/username"/>
                </Form.Item>

                <Form.Item
                    label="Dribbble"
                    name="dribbble"
                >
                    <Input defaultValue={modifyProfile ? '' : (currentUser as User).dribbble || ""} placeholder="https://dribbble.com/username"/>
                </Form.Item>

                {!isModifyProfilePage ? 
                    <Form.Item 
                        valuePropName={'checked'}
                    >
                        <Checkbox style={{fontFamily: 'Mark Pro'}} checked={checked} onChange={(e) => changeChecked(e.target.checked)}>Agree to the <a style={{color: UNIVERSAL_COLOR}} target={'_blank'} href={'/terms'}>Terms of Services</a></Checkbox>
                </Form.Item> 
                : null}

                    
                {isModifyProfilePage ? 
                        <Form.Item>
                        <Row justify="space-between" align="middle">
                            <>
                                <BigBlackButton type="default" onClick={viewProfile}>
                                    View Profile
                                </BigBlackButton>
                                <BigBlackButton htmlType="submit">
                                    Update Profile
                                </BigBlackButton>
                            </>
                        </Row>
                    </Form.Item> 
                : null}
                    
            
            </Form>
    );
}

export default FormPersonalData