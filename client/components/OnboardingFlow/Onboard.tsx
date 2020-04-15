import React, { useState, useContext } from 'react'
import {OnboardNavbar} from './OnboardNavbar'
import {Container} from '../General/Container'
import {Typography, Row, Col, message} from 'antd'
import {User, NavBarStatus, Employer} from '../../model/model'
import FormPersonalData from './Designers/FormPersonalData'
import FormBusinessData from './Employers/FormBusinessData'
import QuizScreen from './Designers/QuizScreen'
import EmployerDesigner from './EmployerDesigner'
import styled from 'styled-components'
import {UserContext} from '../../lib/UserProvider'
import {createUser, createEmployer} from '../../lib/server'
import Router from 'next/router'
import OpenPage from '../General/OpenPage'
import { SumpixelCard } from '../General/SumpixelCard'
import BackNext from '../General/BackNext'
import {ContainerCard, Question} from './EmployerDesigner'

interface OnboardProps {
    deleteUser: () => void
}

export const Onboard: React.FC<OnboardProps> = props => {
    const [currentStep, changeStep] = useState(0);
    const [navBarStatus, changeNavbarStatus] = useState<NavBarStatus>(NavBarStatus.Undecided);
    const {currentUser, changeUser, loading, setLoading}  = useContext(UserContext)

    const updateUser = async (updatedUser: User) => {
        window.analytics.track('Create User');
        changeUser(updatedUser)
        await createUser(updatedUser)
    }

    const updateEmployer = async (updatedUser: Employer) => {
        window.analytics.track('Create Employer');
        changeUser(updatedUser)
        await createEmployer(updatedUser)
    }

    const backClick = () => {
        if (currentStep === 0) {
            props.deleteUser()
        } else {
            changeStep(currentStep - 1)
        }
    }
    
    const nextClick = () => {
        if (currentStep === 0 && navBarStatus === NavBarStatus.Undecided) {
            message.error('Please choose whether you are a designer or employer')
            return
        } else if (currentStep === 0) {
            // Without timeout, it automatically calls Next submit
            setTimeout(() => {
                changeStep(currentStep + 1)
            }, 1)
        }
    }

    var currentForm;
    switch (currentStep) {
        case 0:
            currentForm = <EmployerDesigner 
                                    currentStatus={navBarStatus}
                                    deleteUser={props.deleteUser}
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}/>;
            break;
        case 1:
            if (navBarStatus == NavBarStatus.Designer) {
                currentForm = 
                            <ContainerCard style={{paddingBottom: 0}}>
                                <Question>Let's build your profile.</Question>
                                <FormPersonalData 
                                    changeCurrentUser={async (user) => await updateUser(user)}/>
                            </ContainerCard>;
            } else {
                currentForm =
                            <ContainerCard style={{paddingBottom: 25}}>
                                <Question>Let's build your profile.</Question>
                                <FormBusinessData 
                                    changeCurrentUser={async (user) => await updateEmployer(user)}/>
                            </ContainerCard>;
            }
            break;
        case 2:
            if (navBarStatus == NavBarStatus.Designer) {
                OpenPage(setLoading, '/dashboard_user')
            } else {
                OpenPage(setLoading, '/dashboard_employer')
            }
            break;
    }

    return (
        <Row gutter={24}>
            <Col span={24}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: 40}}>
                    <img height={50} src={require('../../assets/sumpixel-logo-white.png')}/>
                </div>
                <SumpixelCard withLogo={false}>
                    <OnboardNavbar currentStep={currentStep}/>
                    <div style={{padding: 20}}>
                        {currentForm}
                    </div>
                    <BackNext backClick={backClick} 
                              nextClick={nextClick} 
                              currentState={currentStep} 
                              status={navBarStatus} />
                </SumpixelCard>
            </Col>
        </Row>
    );
}