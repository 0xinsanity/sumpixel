import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from './FormProps'
import {removeUser} from '../../lib/server'

interface EmployerDesignerProps extends FormProps {
    changeIsDesigner: (isDesigner: boolean) => void
}

const EmployerDesigner: React.FC<EmployerDesignerProps> = (props) => {
    const {currentUser, changeCurrentUser, changeStep, changeIsDesigner} = props
    const onClick = (isDesigner: boolean) => {
        changeIsDesigner(isDesigner)
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