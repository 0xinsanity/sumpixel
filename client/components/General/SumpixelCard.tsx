import React from 'react'
import {Card} from 'antd'

export const SumpixelCard: React.FC<{withLink?: boolean}> = (props) => {
    var logo = <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
    if (props.withLink) {
        logo =  <a href={'/'}>
                    <img height={43} src={require('../../assets/sumpixel-logo.png')}/>
                </a>
    }

    return (
        <Card style={{paddingLeft: 20, paddingRight: 20, maxHeight: '100vh'}} title={logo}>
                {props.children}
        </Card>
    )
}