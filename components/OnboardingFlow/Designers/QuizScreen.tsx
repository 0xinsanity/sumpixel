import React, {useContext, useState} from 'react'
import { Form, Radio, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from '../FormProps'
import {removeUser, didCompleteQuiz} from '../../../lib/server'
import Router from 'next/router'
import {UserContext} from '../../../lib/UserProvider'
import { ReactTypeformEmbed } from 'react-typeform-embed';

interface QuizScreenProps extends FormProps {
    isDashboard?: boolean
}

interface QuizProp {
    link: string, 
    name: string
}

const QuizScreen: React.FC<QuizScreenProps> = (props) => {
    const {changeCurrentUser, changeStep, isDashboard} = props
    const {currentUser}  = useContext(UserContext)

    const designerTypes = [{name: "UI", link: "https://sumpixelbiz.typeform.com/to/riENWs?id=" + currentUser.id}, 
                            {name: "UX", link: "https://sumpixelbiz.typeform.com/to/TqV8Jo?id=" + currentUser.id}, 
                            {name: "Brand", link: "https://sumpixelbiz.typeform.com/to/BOBhxP?id=" + currentUser.id}, 
                            {name: "Product", link: "https://sumpixelbiz.typeform.com/to/irGM8E?id=" + currentUser.id}]

    const [currentQuiz, changeQuiz] = useState<QuizProp>(designerTypes[0])

    const goBack = async () => {
        await removeUser(currentUser.id)
        changeStep(-1)
    }

    const onChange = (updateQuiz: QuizProp) => {
        changeQuiz(updateQuiz)
    }

    const submit = () => {
        currentUser["designType"] = currentQuiz.name
        currentUser["completedQuiz"] = true
        changeCurrentUser(currentUser)
        Router.replace('/dashboard_user')
    }
    
    return (
        <>
            <Typography.Title style={{textAlign: 'center'}} level={4}>
                Click one of the following categories to be redirected to your quiz. When you complete your quiz, return here and refresh the page!
            </Typography.Title>
            <Col style={{marginTop: 20}}>
                <Radio.Group onChange={(e) => onChange(e.target.value)} value={currentQuiz}>
                    {_.map(designerTypes, (type: QuizProp) => {
                        return <Radio.Button>{type.name}</Radio.Button>
                    })}
                </Radio.Group>
                
            </Col>
            <ReactTypeformEmbed url={currentQuiz.link} onSubmit={submit}/>
            {isDashboard === null ? 
                <Button style={{marginTop: 20}} type="default" onClick={goBack}>
                    Back
                </Button> 
            : null}
        </>
    );
}

export default QuizScreen