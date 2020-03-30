import React, {useEffect} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from './FormProps'
import {removeUser, didCompleteQuiz} from '../../lib/server'
import Router from 'next/router'

const QuizScreen: React.FC<FormProps> = (props) => {
    const {currentUser, changeCurrentUser, changeStep} = props

    useEffect(() => {
        async function findUser() {
            const user = await didCompleteQuiz(currentUser.id)

            if (user['completed_quiz']) {
                Router.replace('/dashboard_user')
            }
        }
        findUser()
    }, []);

    const goBack = async () => {
        await removeUser(currentUser.id)
        changeStep(-1)
    }
    return (
        <>
            <Typography.Title style={{textAlign: 'center'}} level={4}>
                You will now be redirected to TypeForm to take your quiz. Refresh this page when you complete the quiz. If you are not redirected, please go to the following link:
            </Typography.Title>
            <Button type="default" onClick={goBack}>
                Back
            </Button>
        </>
    );
}

export default QuizScreen