import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from './FormProps'
import {removeUser} from '../../lib/server'
import {NavBarStatus} from '../../model/model'
import styled from 'styled-components'

const EMButton = styled(Button)`
    margin-bottom: 30px
`

const EmployerDesigner: React.FC<FormProps> = (props) => {
    const {changeStep, changeNavbarStatus} = props
    const onClick = (isDesigner: boolean) => {
        changeNavbarStatus(isDesigner ? NavBarStatus.Designer : NavBarStatus.Employer)
        changeStep(1)
    }
    return (
        <>
            <EMButton type="default" onClick={() => onClick(false)}>
                Employer
            </EMButton>
            <EMButton type="default" onClick={() => onClick(true)}>
                Designer
            </EMButton>
            <EMButton type="default" onClick={props.deleteUser}>
                Change Email or Name
            </EMButton>
        </>
    );
}

export default EmployerDesigner