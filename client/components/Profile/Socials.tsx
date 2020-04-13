import React from 'react'
import {Container, AboveText} from './TextAboveAnswer'
import {LinkedinOutlined, DribbbleOutlined} from '@ant-design/icons'

interface TextAboveAnswerProps {
    linkedin?: string
    dribbble?: string
}

const TextAboveAnswer: React.FC<TextAboveAnswerProps> = (props) => {
    const {linkedin, dribbble} = props
    if (linkedin === null && dribbble === null) {
        return <></>
    }

    return (
        <Container >
            <AboveText>Socials</AboveText>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {linkedin !== null ? 
                    <a href={linkedin} target={'_blank'}>
                        <LinkedinOutlined style={{marginRight: 10, fontSize: 20, color: '#13B0C3'}} />
                    </a>
                : null}
                {dribbble !== null ? 
                    <a href={dribbble} target={'_blank'}>
                        <DribbbleOutlined style={{ fontSize: 20, color: '#13B0C3'}} />
                    </a>
                : null}
            </div>
        </Container>
    )
}

export default TextAboveAnswer