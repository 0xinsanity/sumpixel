import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography, Radio } from 'antd';
import _ from 'lodash'
import FormProps from './FormProps'
import {removeUser} from '../../lib/server'
import {NavBarStatus} from '../../model/model'
import styled from 'styled-components'
import { BigBlackButton } from '../General/BigBlackButton';

export const Question = styled(Typography.Text)`
    font-family: 'Mark Pro Bold';
    text-align: center;
    padding-bottom: 46px;
    color: #000000;
    font-size: 20px;
`

export const ContainerCard = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RButton = styled(Radio.Button)`
    padding-top: 23px;
    padding-bottom: 50px;
    padding-left: 68px;
    padding-right: 68px;
    font-family: 'Mark Pro Bold';
    font-size: 20px;
    border-radius: 0 0 0 0 !important;
`

interface EmployerProps extends FormProps {
    changeNavbarStatus: (stat: NavBarStatus) => void
    currentStatus: NavBarStatus
}

const EmployerDesigner: React.FC<EmployerProps> = (props) => {
    const {changeNavbarStatus, currentStatus} = props
    const onClick = (status: NavBarStatus) => {
        changeNavbarStatus(status)
    }
    return (
        <ContainerCard>
            <Question>Are you an employer or a designer?</Question>
            <Radio.Group onChange={(e) => onClick(e.target.value)} value={currentStatus}>
                <RButton value={NavBarStatus.Employer}>Employer</RButton>
                <RButton value={NavBarStatus.Designer}>Designer</RButton>
            </Radio.Group>
        </ContainerCard>
    );
}

export default EmployerDesigner