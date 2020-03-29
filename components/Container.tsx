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
}
export const Container: React.FC<ContainerProps> = props => {
    return (
        <>
            <Row gutter={16}>
                <Col className={'gutter-row'} span={4}/>
                <ColContainer className={'gutter-row'} span={16}>
                    {props.children}
                </ColContainer>
                <Col className={'gutter-row'} span={4}/>
            </Row>
        </>
    )
}