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
import Loading from '../../General/Loading'
const {Option} = Select

interface FormPersonalDataProps extends FormProps {
    modifyProfile?: boolean
}

const FormPersonalData: React.FC<FormPersonalDataProps> = (props) => {
    const {changeCurrentUser, changeStep, changeNavbarStatus, modifyProfile} = props
    const {currentUser}  = useContext(UserContext)
    const [fileList, updateFileList] = useState<UploadFile[]>([])
    const goBack = async () => {
        await removeUser(currentUser.id)
        await myFirebase.auth().signOut()
        changeNavbarStatus(NavBarStatus.Undecided)
        changeStep(-1)
        
    }

    const isModifyProfilePage = modifyProfile !== null

    if (currentUser == undefined) {
        return (<Loading />)
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
        console.table(_.pickBy(newUser, _.identity))
        changeCurrentUser(_.pickBy(newUser, _.identity))

        if (isModifyProfilePage) {
            message.success("Profile Updated")
        } else {
            changeStep(1)
        }
    }

    const onFinish = (values) => {
        const res = values.resume
        console.log(res)
        if (res === undefined) {
            updateUser(values)
        } else {
            storage_ref.child('resumes/' + currentUser.id + '.pdf').put(res.file["originFileObj"]).then((snapshot) => {
                updateUser(values)
            })
        }    
    }

    const onFinishFailed = (values) => {
        console.table(values)
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
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Phone Number is required' : '' }]}
            >
                <Input defaultValue={isModifyProfilePage ? '' : currentUser.phoneNumber || ""} placeholder="+1 (555) 555-5555"/>
            </Form.Item>

            <Form.Item
                label="Location"
                name="location"
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Location is required' : '' }]}
            >
                <Input defaultValue={isModifyProfilePage ? '' : currentUser.location || ""} placeholder="New York City"/>
            </Form.Item>

            <Form.Item
                label="Desired Salary"
                name="salary"
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Desired Salary is required' : ''}]}
            >
                <Input defaultValue={isModifyProfilePage ? '' : (currentUser as User).salary || ""} placeholder="$100,000-$150,000 per year"/>
            </Form.Item>

            <Form.Item
                label="Preferred Role"
                name="preferredRole"
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Preferred Role is required' : '' }]}
            >
                <Input defaultValue={isModifyProfilePage ? '' : (currentUser as User).preferredRole || ""} placeholder="UI/UX Designer"/>
            </Form.Item>

            <Form.Item
                label="Portfolio"
                name="portfolio"
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Portfolio is required' : '' }]}
            >
                <Input defaultValue={isModifyProfilePage ? '' : (currentUser as User).portfolio || ""} placeholder="https://www.myportfolio.com"/>
            </Form.Item>

            <Form.Item
                label="Resume"
                name="resume"
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Resume is required' : '' }]}
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
                            return file;
                        });

                        if (info.file.status === 'done') {
                            message.success(`${info.file.name} file uploaded successfully`);
                        } else if (info.file.status === 'error') {
                            message.error(`${info.file.name} file upload failed.`);
                        }

                        updateFileList(fileList_update)
                    }}>
                    <Button>
                        <UploadOutlined /> {!isModifyProfilePage ? "Click to Upload" : "Upload New Resume"}
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item
                label="Visa Status"
                name="visa_status"
                rules={[{ required: !isModifyProfilePage, message: !isModifyProfilePage ? 'Visa Status is required' : '' }]}
                
            >
                <Select defaultValue={modifyProfile ? '' : (currentUser as User).visa || ""} placeholder="Select an option:">
                    {_.map(VisaStatus, (status) => {
                        return <Option value={status}>{status}</Option>
                    })}
                </Select>
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

            {modifyProfile === undefined ? 
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
            : null}

                <Form.Item>
                    <Row justify="space-between" align="middle">
                        {modifyProfile === undefined ? 
                        <Button type="default" onClick={goBack}>
                            Back
                        </Button>
                        : null}
                        <Button type="primary" htmlType="submit">
                            {modifyProfile === undefined ? "Take The Quiz" : "Update Profile" }
                        </Button>
                    </Row>
                </Form.Item> 
           
        </Form>
    );
}

export default FormPersonalData