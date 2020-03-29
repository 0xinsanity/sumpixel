import React, { useEffect, useState } from 'react'
import {OnboardNavbar} from './OnboardNavbar'
import {Container} from './Container'
import {Typography} from 'antd'
import {User} from '../model/model'
import {myFirebase} from "../lib/firebase";
import FormPersonalData from './OnboardingFlow/FormPersonalData'
import QuizScreen from './OnboardingFlow/QuizScreen'
import styled from 'styled-components'

const Title = styled(Typography.Title)`
    padding-top: 15px;
    padding-bottom: 35px;
`

const TOTAL_STEPS = [
    {title: "Get Started", desc: "Add Personal Data"},
    {title: "Take the Quiz", desc: "Finish Up and Get Evaluated"}
];

export const Onboard: React.FC<{}> = props => {
    const [currentStep, changeStep] = useState(0);
    const [currentUser, changeUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const firebaseUser = myFirebase.auth().currentUser;
        if (firebaseUser !== null) {
            console.log(firebaseUser.displayName)
            changeUser({
                email: firebaseUser.email,
                firebaseId: firebaseUser.uid,
                firstName: firebaseUser.displayName.substr(0, firebaseUser.displayName.indexOf(' ')),
                lastName: firebaseUser.displayName.substr(firebaseUser.displayName.indexOf(' ')+1),
            });
        }
    }, [myFirebase.auth().currentUser]);

    var currentForm;
    var title;
    switch (currentStep) {
        case 0:
            title = TOTAL_STEPS[0].title
            currentForm = <FormPersonalData changeStep={(change) => changeStep(currentStep + change)}
                                 currentUser={currentUser}
                                 changeCurrentUser={(user) => changeUser(user)}/>;
            break;
        case 1:
            title = TOTAL_STEPS[1].title
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