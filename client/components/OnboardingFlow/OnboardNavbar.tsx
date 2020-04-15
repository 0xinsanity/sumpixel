import React from 'react'
import { Steps } from 'antd';
const {Step} = Steps;
import _ from 'lodash'
import {NavBarStatus} from '../../model/model'

interface OnboardNavbarProps {
    currentStep: number;
}

const STEPS = [
    "Intro",
    "Build Profile",
    "Get Started"
];

export const OnboardNavbar: React.FC<OnboardNavbarProps> = (props) => {

    return (
        <Steps 
            style={{
                fontFamily: 'Mark Pro Bold',
                justifyContent: 'center',
                backgroundColor: 'rgba(229, 229, 229, 0.3)',
                paddingLeft: 80,
                paddingRight: 80,
                paddingTop: 40,
                paddingBottom: 40,
                fontSize: 20
            }}
            current={props.currentStep}>
            {_.map(STEPS, (step) => {
                return (<Step title={step}/>)
            })}
        </Steps>
    );
}