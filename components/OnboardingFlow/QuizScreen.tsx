import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import _ from 'lodash'
import {User, VisaStatus} from '../../model/model'
import FormProps from './FormProps'
import {UploadFile} from 'antd/lib/upload/interface'
import {storage_ref} from '../../lib/firebase'
const {Option} = Select

const QuizScreen: React.FC<FormProps> = (props) => {
    return (
        <Typography>You will now be redirected to TypeForm to take your quiz. Refresh this page when you complete the quiz.</Typography>
    );
}

export default QuizScreen