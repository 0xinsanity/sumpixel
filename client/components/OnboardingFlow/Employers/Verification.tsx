import React, {useContext} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from '../FormProps'
import {removeEmployer} from '../../../lib/server'
import Router from 'next/router'
import {UserContext} from '../../../lib/UserProvider'

const Verification: React.FC<FormProps> = (props) => {
    const {changeStep} = props
    const {currentUser}  = useContext(UserContext)

    const goBack = async () => {
        await removeEmployer(currentUser.id)
        changeStep(-1)
    }

    const goToDashboard = () => {
        Router.replace('/dashboard_employer')
    }

    return (
        <>
            <Button style={{marginTop: 20}} type="default" onClick={goToDashboard}>
                Go To Dashboard
            </Button>
            <Button style={{marginTop: 20}} type="default" onClick={goBack}>
                Back
            </Button>
        </>
    );
}

export default Verification