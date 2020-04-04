import React from 'react'
import { UserAndGrade } from '../../../model/model'
import {Modal, Button, Typography} from 'antd'
import {createCommunication} from '../../../lib/server'
import _ from 'lodash'

interface DesignerInfoModalProps {
    info: UserAndGrade
    visible: boolean
    onConnect: (designerId: string) => void
}

const DesignerInfoModal: React.FC<DesignerInfoModalProps> = props => {
    const {info, visible, onConnect} = props
    if (info === undefined) {
        return <></>
    }
    const {designer, grade} = info

    const showInfo = {
        "Portfolio": designer.portfolio,
        "Location": designer.location,
        "Preferred Role": designer.preferredRole,
        "Desired Salary": designer.salary,
    }

    const onClick = () => {
        onConnect(designer.id)
    }

    return (
        <Modal
            title={designer.firstName + " " + designer.lastName}
            visible={visible}
            footer={[
                <Button onClick={onClick} type="primary">
                    Connect
                </Button>]}
        >
            <Typography.Title level={3} underline>Our Evaluation</Typography.Title>
            <Typography.Title level={4}>Overall Score: {grade.score}</Typography.Title>
            <Typography.Text>
                This score is out of 10. 
                It was carefully picked by our evaluators to give an indication of the ability of this designer related to others on the platform.
            </Typography.Text>
            <Typography.Title level={3}>Response From Evaluator:</Typography.Title>
            <Typography.Text>
                {grade.response}
            </Typography.Text>
            <Typography.Title level={3} underline>{designer.firstName}'s Info</Typography.Title>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {_.map(_.keys(showInfo), (key) => {
                    return (<Typography.Text>{key}: {showInfo[key]}{'\n'}</Typography.Text>)
                })}
            </div>
        </Modal>)
}

export default DesignerInfoModal