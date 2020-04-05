import React from 'react'
import {Row, Col} from 'antd'
import styled from 'styled-components';

const ColContainer = styled(Col)`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface ContainerProps {
    children: React.ReactNode
    isDashboard?: boolean
    style?: any
}
export const Container: React.FC<ContainerProps> = props => {
    return (
        <Row gutter={24}>
            <Col className={'gutter-row'} span={props.isDashboard !== undefined ? 2 : 5}/>
            <ColContainer style={props.style} className={'gutter-row'} span={props.isDashboard !== undefined ? 20 : 14}>
                {props.children}
            </ColContainer>
            <Col className={'gutter-row'} span={props.isDashboard !== undefined ? 2 : 5}/>
        </Row>
    )
}