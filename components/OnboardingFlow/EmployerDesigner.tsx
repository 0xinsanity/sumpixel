import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from './FormProps'
import {removeUser} from '../../lib/server'
import {NavBarStatus} from '../../model/model'

const EmployerDesigner: React.FC<FormProps> = (props) => {
    const {changeStep, changeNavbarStatus} = props
    const onClick = (isDesigner: boolean) => {
        changeNavbarStatus(isDesigner ? NavBarStatus.Designer : NavBarStatus.Employer)
        changeStep(1)
    }
    return (
        <>
            <Button type="default" onClick={() => onClick(false)}>
                Employer
            </Button>
            <Button type="default" onClick={() => onClick(true)}>
                Designer
            </Button>
        </>
    );
}

export default EmployerDesigner