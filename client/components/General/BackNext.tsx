import React from 'react'
import styled from 'styled-components'
import {BigBlackButton} from './BigBlackButton'
import {NavBarStatus} from '../../model/model'
import {Button, Form} from 'antd'

const Container = styled.div`
    border-top: 1px solid #DAE2EF;
    width: 100%;
    padding-bottom: 46px;
    padding-top: 46px;
    padding-right: 66px;
    padding-left: 66px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    display: flex;
`

const Link = styled(Button)`
    font-family: 'Mark Pro';
    color: #000;
    height: 100%;
    margin-right: 70px;
`

interface BackNextProps {
    backClick: () => void
    nextClick: () => void
    status: NavBarStatus
    currentState: number
}

const BackNext: React.FC<BackNextProps> = (props) => {
    const {backClick, nextClick, status, currentState} = props

    const button_style = {paddingLeft: 67, paddingRight: 67}
    var button
    if (currentState === 0) {
        button = <BigBlackButton style={button_style} onClick={nextClick}>Next</BigBlackButton>
    } else if (currentState === 1) {
        if (status === NavBarStatus.Designer) {
            button = <BigBlackButton form="designer_form" htmlType="submit" style={button_style}>Next</BigBlackButton>
        } else {
            button = <BigBlackButton form="employer_form" htmlType="submit" style={button_style}>Next</BigBlackButton>
        }
    }
    return (
        <Container>
            <Link onClick={backClick} type={'link'}>Back</Link>
            {button}
        </Container>
    )
}

export default BackNext