import React, { useEffect, useState } from 'react'
import {OnboardNavbar} from './OnboardNavbar'
import {Container} from './Container'
import {Typography} from 'antd'
import {User, Employer, NavBarStatus} from '../model/model'
import {myFirebase} from "../lib/firebase";
import FormPersonalData from './OnboardingFlow/Designers/FormPersonalData'
import FormBusinessData from './OnboardingFlow/Employers/FormBusinessData'
import QuizScreen from './OnboardingFlow/Designers/QuizScreen'
import Verification from './OnboardingFlow/Employers/Verification'
import EmployerDesigner from './OnboardingFlow/EmployerDesigner'
import styled from 'styled-components'
import {getUser,getEmployer, createUser, createEmployer} from '../lib/server'

const Title = styled(Typography.Title)`
    padding-top: 15px;
    padding-bottom: 35px;
`

export const Onboard: React.FC<{}> = props => {
    const [currentStep, changeStep] = useState(0);
    const [navBarStatus, changeNavbarStatus] = useState<NavBarStatus>(NavBarStatus.Undecided);
    const [currentUser, changeUser] = useState<User | Employer | undefined>(undefined);

    useEffect(() => {
        async function findUser() {
            const user = await getUser(firebaseUser.uid)
            const employer = await getEmployer(firebaseUser.uid)

            if (user['user_exists'] == undefined) {
                changeUser(user as User);
                changeNavbarStatus(NavBarStatus.Designer)
                changeStep(2)
            } else if (employer['employer_exists'] == undefined) {
                changeUser(employer as Employer);
                changeNavbarStatus(NavBarStatus.Employer)
                changeStep(2)
            } else {
                // Works for both
                changeUser({
                    email: firebaseUser.email,
                    id: firebaseUser.uid,
                    firstName: firebaseUser.displayName.substr(0, firebaseUser.displayName.indexOf(' ')),
                    lastName: firebaseUser.displayName.substr(firebaseUser.displayName.indexOf(' ')+1),
                });
            }
        }

        const firebaseUser = myFirebase.auth().currentUser;
        if (firebaseUser !== null) {
            findUser()
        }
    }, [myFirebase.auth().currentUser]);

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
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}
                                    changeStep={(change) => changeStep(currentStep + change)}/>;
            break;
        case 1:
            if (navBarStatus == NavBarStatus.Designer) {
                currentForm = <FormPersonalData 
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}
                                    changeStep={(change) => changeStep(currentStep + change)}
                                    currentUser={currentUser}
                                    changeCurrentUser={async (user) => await updateUser(user)}/>;
            } else {
                currentForm = <FormBusinessData 
                                    changeNavbarStatus={(newStatus) => changeNavbarStatus(newStatus)}
                                    changeStep={(change) => changeStep(currentStep + change)}
                                    currentUser={currentUser}
                                    changeCurrentUser={async (user) => await updateEmployer(user)}/>;
            }
            break;
        case 2:
            if (navBarStatus == NavBarStatus.Designer) {
                currentForm = <QuizScreen changeStep={(change) => changeStep(currentStep + change)}
                                     currentUser={currentUser}
                                     changeCurrentUser={async (user) => await updateUser(user)}/>;
            } else {
                currentForm = <Verification changeStep={(change) => changeStep(currentStep + change)}
                                     currentUser={currentUser}
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