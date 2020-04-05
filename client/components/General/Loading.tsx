import React from 'react'
import {Spin} from 'antd'
import styled from 'styled-components'

const Cont = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Loading: React.FC = () => {
    return (
        <Cont>
            <Spin size="large" />
        </Cont>
    )
}

export default Loading