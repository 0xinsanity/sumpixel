import React, { useState, useContext } from 'react'
import {OnboardNavbar} from './OnboardNavbar'
import {Container} from '../General/Container'
import {Typography} from 'antd'
import {User, NavBarStatus} from '../../model/model'
import FormPersonalData from './Designers/FormPersonalData'
import FormBusinessData from './Employers/FormBusinessData'
import QuizScreen from './Designers/QuizScreen'
import Verification from './Employers/Verification'
import EmployerDesigner from './EmployerDesigner'
import styled from 'styled-components'
import {UserContext} from '../../lib/UserProvider'
import {createUser, createEmployer} from '../../lib/server'

const Title = styled(Typography.Title)`
    padding-top: 15px;
    padding-bottom: 35px;
`

interface OnboardProps {
    deleteUser: () => void
}

export const Onboard: React.FC<OnboardProps> = props => {
    const [currentStep, changeStep] = useState(0);
    const [navBarStatus, changeNavbarStatus] = useState<NavBarStatus>(NavBarStatus.Undecided);
    const {currentUser, changeUser}  = useContext(UserContext)

    const updateUser = async (updatedUser: User) => {
        changeUser(updatedUser)
        await createUser(updatedUser)
    }

    const updateEmployer = async (updatedUser: User) => {
        changeUser(updatedUser)
        await createEmployer(updatedUser)
    }
    var currentForm;
    var title;
    switch (currentStep) {
        case 0:
            currentForm = <EmployerDesigner 
                                    deleteUser={props.deleteUser}
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}
                                    changeStep={(change) => changeStep(currentStep + change)}/>;
            break;
        case 1:
            if (navBarStatus == NavBarStatus.Designer) {
                currentForm = <FormPersonalData 
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}
                                    changeStep={(change) => changeStep(currentStep + change)}
                                    changeCurrentUser={async (user) => await updateUser(user)}/>;
            } else {
                currentForm = <FormBusinessData 
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}
                                    changeStep={(change) => changeStep(currentStep + change)}
                                    changeCurrentUser={async (user) => await updateEmployer(user)}/>;
            }
            break;
        case 2:
            if (navBarStatus == NavBarStatus.Designer) {
                currentForm = <QuizScreen changeStep={(change) => changeStep(currentStep + change)}
                                     changeCurrentUser={async (user) => await updateUser(user)}/>;
            } else {
                currentForm = <Verification changeStep={(change) => changeStep(currentStep + change)}
                                     changeCurrentUser={async (user) => await updateEmployer(user)}/>;
            }
            break;
    }

    return (
        <Container>
            <OnboardNavbar status={navBarStatus} currentStep={currentStep}/>
            <Title>{title}</Title>
            {currentForm}
        </Container>
    );
}