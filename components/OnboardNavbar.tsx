import React from 'react'
import { Steps } from 'antd';
const {Step} = Steps;
import _ from 'lodash'
import {NavBarStatus} from '../model/model'

interface OnboardNavbarProps {
    currentStep: number;
    status: NavBarStatus
}

const DESIGN_STEPS: {title: string, desc: string}[] = [
    {title: "Employer or Designer", desc: "Are you an Employer or Designer?"},
    {title: "Get Started", desc: "Add Personal Data"},
    {title: "Take the Quiz", desc: "Finish Up and Get Evaluated"}
];
const EMPLOYER_STEPS: {title: string, desc: string}[] = [
    {title: "Employer or Designer", desc: "Are you an Employer or Designer?"},
    {title: "Get Started", desc: "Add Data About Your Business"},
    {title: "Go To Dashboard", desc: "Finish Up and Start Searching"}
];

export const OnboardNavbar: React.FC<OnboardNavbarProps> = (props) => {
    var steps: {title: string, desc: string}[]
    switch (props.status) {
        case NavBarStatus.Undecided:
            steps = [DESIGN_STEPS[0]]
            break;
        case NavBarStatus.Designer:
            steps = DESIGN_STEPS
            break;
        case NavBarStatus.Employer:
            steps = EMPLOYER_STEPS
            break;
    }

    return (
        <Steps style={{paddingBottom: 20, justifyContent: 'center'}} current={props.currentStep}>
            {_.map(steps, ({title, desc}) => {
                return (<Step title={title} description={desc}/>)
            })}
        </Steps>
    );
}