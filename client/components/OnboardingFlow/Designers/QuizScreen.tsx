import React, {useContext, useState, useEffect, useRef } from 'react'
import { Form, Radio, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from '../FormProps'
import {removeUser} from '../../../lib/server'
import {RButton} from '../EmployerDesigner'
import Router from 'next/router'
import {UserContext} from '../../../lib/UserProvider'
import styled from 'styled-components'
import * as typeformEmbed from '@typeform/embed'

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    height: 60vh;
`

interface QuizProp {
    link: string, 
    name: string,
    key: number
}

const QuizScreen: React.FC<FormProps> = (props) => {
    const {changeCurrentUser} = props
    const {currentUser}  = useContext(UserContext)
    var typeform = useRef(null)

    const designerTypes = [{key: 0, name: "UI", link: "https://sumpixelbiz.typeform.com/to/riENWs?id=" + currentUser.id}, 
                            {key: 1, name: "UX", link: "https://sumpixelbiz.typeform.com/to/TqV8Jo?id=" + currentUser.id}, 
                            {key: 2, name: "Brand", link: "https://sumpixelbiz.typeform.com/to/BOBhxP?id=" + currentUser.id}, 
                            {key: 3, name: "Product", link: "https://sumpixelbiz.typeform.com/to/irGM8E?id=" + currentUser.id}]

    const [currentQuiz, changeQuiz] = useState<QuizProp>(designerTypes[0])

    const submit = () => {
        window.analytics.track('Completed Quiz');
        currentUser["designType"] = currentQuiz.name
        currentUser["completedQuiz"] = true
        changeCurrentUser(currentUser)
        Router.replace('/dashboard_user')
    }

    useEffect(() => {
        if (typeform) {
            typeformEmbed.makeWidget(typeform.current, currentQuiz.link, {
                hideFooter: true,
                hideHeaders: true,
                opacity: 1,
                onSubmit: submit
            });
        }
    }, [currentQuiz])

    const onChange = (key: number) => {
        changeQuiz(designerTypes[key])
    }

    return (
        <Cont>
            <Typography.Title style={{textAlign: 'center', fontFamily: 'Mark Pro'}} level={4}>
                Choose a Design Type and Take Your Quiz!
            </Typography.Title>
            <Col style={{marginTop: 10, marginBottom: 20, display: 'flex', justifyContent: 'center'}}>
                <Radio.Group onChange={(e) => onChange(e.target.value)} value={currentQuiz.key}>
                    {_.map(designerTypes, (type: QuizProp) => {
                        return <RButton style={{fontSize: 14, 
                                            padding: 35,
                                            paddingTop: 5}} value={type.key}>{type.name}</RButton>
                    })}
                </Radio.Group>
                
            </Col>
            <div style={{position: 'relative', width: '100%', height: '100%'}} ref={typeform}/>
        </Cont>
    );
}

export default QuizScreen