import React, {useContext} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Select, Upload, message, Typography } from 'antd';
import _ from 'lodash'
import FormProps from '../FormProps'
import {removeUser, didCompleteQuiz} from '../../../lib/server'
import Router from 'next/router'
import {UserContext} from '../../../lib/UserProvider'

const QuizScreen: React.FC<FormProps> = (props) => {
    const {changeCurrentUser, changeStep} = props
    const {currentUser}  = useContext(UserContext)

    const designerTypes = [{name: "UI", link: "https://sumpixelbiz.typeform.com/to/riENWs"}, 
                            {name: "UX", link: "https://sumpixelbiz.typeform.com/to/TqV8Jo"}, 
                            {name: "Brand", link: "https://sumpixelbiz.typeform.com/to/BOBhxP"}, 
                            {name: "Product", link: "https://sumpixelbiz.typeform.com/to/irGM8E"}]

    const goBack = async () => {
        await removeUser(currentUser.id)
        changeStep(-1)
    }

    const clickedDesignButton = (name: string) => {
        currentUser["designType"] = name
        changeCurrentUser(currentUser)
    }

    return (
        <>
            <Typography.Title style={{textAlign: 'center'}} level={4}>
                Click one of the following categories to be redirected to your quiz. When you complete your quiz, return here and refresh the page!
            </Typography.Title>
            <Col style={{marginTop: 20}}>
                {_.map(designerTypes, (type: {name: string, link: string}) => {
                    return <Button onClick={() => clickedDesignButton(type.name)} target="_blank" href={type.link}>{type.name}</Button>
                })}
            </Col>
            <Button style={{marginTop: 20}} type="default" onClick={goBack}>
                Back
            </Button>
        </>
    );
}

export default QuizScreen