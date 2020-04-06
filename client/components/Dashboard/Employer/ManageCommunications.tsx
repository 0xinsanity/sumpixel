import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import { CommForEmployer, EmployerDecisionHire } from '../../../model/model'
import { updateEmployerDecision, getEmployerCommunicationsList } from '../../../lib/server'
import {message} from 'antd'
import {Employer} from '../../../model/model'
import EmployerCommList from './EmployerCommList'

const ManageCommunications: React.FC = (props) => {
    const {currentUser}  = useContext(UserContext)
    const [commList, setCommList] = useState<CommForEmployer[] | undefined>(undefined)

    const updateDecision = async (commId: string, update: EmployerDecisionHire) => {
        window.analytics.track((currentUser as Employer).companyName + ' updated Decision on Designer - ' + update);
        await updateEmployerDecision(commId, update)
        message.success("Updated Decision")
        setCommList(await getEmployerCommunicationsList(currentUser.id))
    }

    useEffect(() => {
        getEmployerCommunicationsList(currentUser.id).then((commList: CommForEmployer[]) => {
            setCommList(commList)
        })
    }, [])

    return (<EmployerCommList communicationList={commList} updateDecision={updateDecision}/>)
}

export default ManageCommunications