import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import {UNIVERSAL_BACKGROUND, UNIVERSAL_COLOR} from '../../model/model'

const LoginFlowContainer = styled.div`
    background-color: ${UNIVERSAL_BACKGROUND}; 
    height: 100vh;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
`

const AbsolutePurple = styled.div`
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${UNIVERSAL_COLOR};
`

export const LoginBackground: React.FC<{children: React.ReactNode, style?: CSSProperties}> = (props) => {
    return (
        <LoginFlowContainer style={props.style}>
            <AbsolutePurple/>
            {props.children}
        </LoginFlowContainer>
    )
}