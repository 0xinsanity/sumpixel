import React, {useContext} from 'react'
import { User, Employer } from '../../../model/model'
import {Modal, Button, Typography} from 'antd'
import {createCommunication} from '../../../lib/server'
import {storage_ref} from '../../../lib/firebase'
import {UserContext} from '../../../lib/UserProvider'
import _ from 'lodash'

interface DesignerInfoModalProps {
    designer: User
    visible: boolean
    onConnect?: (designerId: string) => void
    setInvisible: () => void
}

const DesignerInfoModal: React.FC<DesignerInfoModalProps> = props => {
    const {currentUser, changeUser} = useContext(UserContext)
    const {designer, visible, onConnect, setInvisible} = props

    if (designer === undefined) {
        return <></>
    }

    const {grade} = designer

    const showInfo = {
        "Portfolio": designer.portfolio,
        "Location": designer.location,
        "Preferred Role": designer.preferredRole,
        "Desired Salary": designer.salary,
        "Phone Number": designer.phoneNumber,
        "Email": designer.email,
    }

    const onClick = () => {
        onConnect(designer.id)
    }

    const downloadResume = () => {
        storage_ref.child('resumes/' + designer.resume).getDownloadURL().then(url => {
            console.log(url)
            window.open(url, '_blank')
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <Modal
            onCancel={setInvisible}
            title={designer.firstName + " " + designer.lastName}
            visible={visible}
            footer={[
                onConnect !== undefined && (currentUser as Employer).isAnonymous === undefined ?
                <Button onClick={onClick} type="primary">
                    Connect To {designer.firstName}
                </Button> : null]}
        >
            <Typography.Title level={3} underline>Our Evaluation</Typography.Title>
            <Typography.Title level={4}>Overall Score: {grade.score}</Typography.Title>
            <Typography.Text>
                This score is out of 10. 
                To learn more about our scoring system, <a target={'_blank'} href={'https://sumpixel.com/manifesto'}>click here.</a>
            </Typography.Text>
            <Typography.Title level={4}>Response From Evaluator:</Typography.Title>
            <Typography.Text>
                {grade.response}
            </Typography.Text>
            <Typography.Title level={3} underline>{designer.firstName}'s Info</Typography.Title>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {_.map(_.keys(showInfo), (key) => {
                    return (<Typography.Text>{key}: {showInfo[key]}{'\n'}</Typography.Text>)
                })}
            </div>
            <Button style={{marginTop: 10}} onClick={downloadResume}>
                Download Resume
            </Button>
        </Modal>)
}

export default DesignerInfoModal