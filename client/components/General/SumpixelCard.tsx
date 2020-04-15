import React, { CSSProperties } from 'react'
import {Card} from 'antd'

interface SumpixelCardProps {
    withLink?: boolean
    withLogo?: boolean
    style?: CSSProperties
}

export const SumpixelCard: React.FC<SumpixelCardProps> = (props) => {
    var logo = <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
    if (props.withLink) {
        logo =  <a href={'/'}>
                    <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
                </a>
    } else if (props.withLogo === false) {
        logo = null
    }

    return (
        <Card bodyStyle={{padding: props.withLogo === false ? 0 : 'auto'}} 
            style={{paddingLeft: props.withLogo === false ? 0 : 20, 
                    paddingRight: props.withLogo === false ? 0 : 20, 
                    width: '100vh',
                    ...props.style
                    }} 
            title={logo}>
                {props.children}
        </Card>
    )
}