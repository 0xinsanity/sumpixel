import React, { useEffect, useState } from 'react'
import {OnboardNavbar} from './OnboardNavbar'
import {Container} from './Container'
import {Typography} from 'antd'
import {User} from '../model/model'
import {myFirebase} from "../lib/firebase";
import FormPersonalData from './OnboardingFlow/FormPersonalData'
import QuizScreen from './OnboardingFlow/QuizScreen'
import EmployerDesigner from './OnboardingFlow/EmployerDesigner'
import styled from 'styled-components'
import {getUser} from '../lib/server'

const Title = styled(Typography.Title)`
    padding-top: 15px;
    padding-bottom: 35px;
`

const TOTAL_STEPS = [
    {title: "Employer or Designer", desc: "Are you an Employer or Desinger?"},
    {title: "Get Started", desc: "Add Personal Data"},
    {title: "Take the Quiz", desc: "Finish Up and Get Evaluated"}
];

export const Onboard: React.FC<{}> = props => {
    const [currentStep, changeStep] = useState(0);
    const [isDesigner, changeIsDesigner] = useState<boolean | undefined>(undefined);
    const [currentUser, changeUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        async function findUser() {
            const user = await getUser(firebaseUser.uid)

            if (user['user_exists'] === undefined) {
                changeUser(user as User);
                changeStep(2)
            } else {
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

    var currentForm;
    var title;
    switch (currentStep) {
        case 0:
            title = TOTAL_STEPS[0].title
            currentForm = <EmployerDesigner 
                                    changeIsDesigner={(isDesigner) => changeIsDesigner(isDesigner)}
                                    changeStep={(change) => changeStep(currentStep + change)}
                                    currentUser={currentUser}
                                    changeCurrentUser={(user) => changeUser(user)}/>;
            break;
        case 1:
            title = TOTAL_STEPS[1].title
            currentForm = <FormPersonalData changeStep={(change) => changeStep(currentStep + change)}
                                    currentUser={currentUser}
                                    changeCurrentUser={(user) => changeUser(user)}/>;
            break;
        case 2:
            title = TOTAL_STEPS[2].title
            currentForm = <QuizScreen changeStep={(change) => changeStep(currentStep + change)}
                                 currentUser={currentUser}
                                 changeCurrentUser={(user) => changeUser(user)}/>;
            break;
    }

    return (
        <Container>
            <OnboardNavbar currentStep={currentStep} steps={TOTAL_STEPS}/>
            <Title>{title}</Title>
            {currentForm}
        </Container>
    );
}