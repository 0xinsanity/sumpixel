import React from 'react'
import {Spin} from 'antd'
import styled from 'styled-components'

const Cont = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

const Loading: React.FC<{loading?: boolean}> = (props) => {
    return (
        <Cont style={{zIndex: props.loading === undefined || props.loading ? 10 : -10}}>
            <Spin size="large" />
        </Cont>
    )
}

export default Loading