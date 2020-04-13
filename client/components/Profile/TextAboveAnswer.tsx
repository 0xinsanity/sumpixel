import React, { CSSProperties } from 'react'
import {Typography, Button} from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const AboveText = styled(Typography.Text)`
    font-family: 'Mark Pro';
    opacity: 0.5;
    padding-bottom: 8px;
`

const BelowText = styled(AboveText)`
    opacity: 1.0;
    padding-bottom: 0px;
    max-width: 150px;
`

const ButtonBelow = styled(Button)`
    opacity: 1.0;
    padding: 0px;
    font-family: 'Mark Pro';
    color: #13B0C3;
    background: rgba(0,0,0,0);
    border: none;
    max-height: 22px;

    &:hover {
        background: rgba(0,0,0,0);
    }

    &:focus {
        background: rgba(0,0,0,0);
    }
`

interface TextAboveAnswerProps {
    above: string;
    below: string;
    link?: string;
    onClick?: () => void
    style?: CSSProperties
    belowTextStyle?: CSSProperties
}

const TextAboveAnswer: React.FC<TextAboveAnswerProps> = (props) => {
    const {above, below, link, onClick, style, belowTextStyle} = props
    return (
        <Container style={style}>
            <AboveText>{above}</AboveText>
            {link !== undefined ? 
                <a target={'_blank'} href={link}>
                    <ButtonBelow style={belowTextStyle}>{below}</ButtonBelow>
                </a>
                : onClick !== undefined ? 
                <ButtonBelow style={belowTextStyle} onClick={onClick}>{below}</ButtonBelow>
                : <BelowText style={belowTextStyle}>{below}</BelowText>
            }
            
        </Container>
    )
}

export default TextAboveAnswer

