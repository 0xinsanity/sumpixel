import React from 'react'
import {Row, Col} from 'antd'

interface ContainerProps {
    children: React.ReactNode
}
export const Container: React.FC<ContainerProps> = props => {
    return (
        <>
            <Row gutter={16}>
                <Col className={'gutter-row'} span={4}/>
                <Col style={{paddingTop: 25, display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={'gutter-row'} span={16}>
                    {props.children}
                </Col>
                <Col className={'gutter-row'} span={4}/>
            </Row>
        </>
    )
}