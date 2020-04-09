import styled from 'styled-components'
import {Button} from 'antd'

export const BigBlackButton = styled(Button)`
    background: #000;
    color: #fff;
    border-radius: 2px;
    border: none;
    padding: 15px 24px;
    height: auto;
    font-family: 'Mark Pro';

    &:hover {
        background: #DAE2EF;
        color: #000;
    }

    &:focus {
        background: #000;
        color: #fff;
    }
`