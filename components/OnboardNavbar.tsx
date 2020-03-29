import React from 'react'
import { Steps } from 'antd';
const {Step} = Steps;
import _ from 'lodash'

interface OnboardNavbarProps {
    currentStep: number;
    steps: {title: string, desc: string}[]
}
export const OnboardNavbar: React.FC<OnboardNavbarProps> = (props) => {
    return (
        <Steps style={{paddingBottom: 20}} current={props.currentStep}>
            {_.map(props.steps, ({title, desc}) => {
                return (<Step title={title} description={desc}/>)
            })}
        </Steps>
    );
}