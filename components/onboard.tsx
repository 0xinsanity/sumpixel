import React, { useEffect, useState } from 'react'
import {createUseStyles} from 'react-jss'
import {OnboardNavbar} from './OnboardNavbar'
import {Container} from './Container'
import {Button} from 'antd'

const TOTAL_STEPS = [
    {title: "Get Started", desc: "Add Personal Data"},
    {title: "Add Socials", desc: "Add Social Networks"},
    {title: "Take the Quiz", desc: "Finish Up and Get Evaluated"}
];

export function Onboard() {
    const [currentStep, changeStep] = useState(0);
    return (
        <Container>
            <OnboardNavbar currentStep={currentStep} steps={TOTAL_STEPS}/>

            <Button style={{width: 100}}>{currentStep !== 2 ? 'Next Step' : 'Take the Quiz'}</Button>
        </Container>
    );
}