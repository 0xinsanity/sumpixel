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

const FormPersonalData: React.FC<FormProps> = (props) => {
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
        const res = values.resume.file
        storage_ref.child('resumes/' + currentUser.id + '.pdf').put(res["originFileObj"]).then((snapshot) => {
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
                resume: currentUser.id + '.pdf'
            }
            if (values.linkedin) {
                newUser['linkedin'] = values.linkedin
            }
            if (values.dribbble) {
                newUser['dribbble'] = values.dribbble
            }
            changeCurrentUser(newUser)
            changeStep(1)
        })
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
                label="Desired Salary"
                name="salary"
                rules={[{ required: true, message: 'Desired Salary is required'}]}
            >
                <Input defaultValue={(currentUser as User).salary || ""} placeholder="$100,000-$150,000 per year"/>
            </Form.Item>

            <Form.Item
                label="Preferred Role"
                name="preferredRole"
                rules={[{ required: true, message: 'Preferred Role is required' }]}
            >
                <Input defaultValue={(currentUser as User).preferredRole || ""} placeholder="UI/UX Designer"/>
            </Form.Item>

            <Form.Item
                label="Portfolio"
                name="portfolio"
                rules={[{ required: true, message: 'Portfolio is required' }]}
            >
                <Input defaultValue={(currentUser as User).portfolio || ""} placeholder="https://www.myportfolio.com"/>
            </Form.Item>

            <Form.Item
                label="Resume"
                name="resume"
                rules={[{ required: true, message: 'Resume is required' }]}
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
                        <UploadOutlined /> Click to Upload
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item
                label="Visa Status"
                name="visa_status"
                rules={[{ required: true, message: 'Visa Status is required' }]}
                
            >
                <Select defaultValue={(currentUser as User).visa || ""} placeholder="Select an option:">
                    {_.map(VisaStatus, (status) => {
                        return <Option value={status}>{status}</Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item
                label="LinkedIn"
                name="linkedin"
            >
                <Input defaultValue={(currentUser as User).linkedin || ""} placeholder="https://www.linkedin.com/in/username"/>
            </Form.Item>

            <Form.Item
                label="Dribbble"
                name="dribbble"
            >
                <Input defaultValue={(currentUser as User).dribbble || ""} placeholder="https://dribbble.com/username"/>
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
                        Take The Quiz
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
}

export default FormPersonalData