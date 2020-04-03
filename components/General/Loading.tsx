import React from 'react'
import {Spin} from 'antd'
import styled from 'styled-components'

const Cont = styled.div`
    position: fixed;
    display: flex;
    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
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