import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../../../lib/UserProvider'
import QuizScreen from '../../OnboardingFlow/Designers/QuizScreen'
import {getDesignCommunicationsList, updateDesignerDecision, createUser} from '../../../lib/server'
import {User, CommForDesigner, DesignerDecisionTalk} from '../../../model/model'
import {Typography, message} from 'antd'
import Loading from '../../General/Loading'
import CommunicationsList from './CommunicationsList'

const ViewCommunications: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)
    const [commList, setCommList] = useState<CommForDesigner[] | undefined>(undefined)

    const updateUser = async (updatedUser: User) => {
        changeUser(updatedUser)
        await createUser(updatedUser)
    }

    const updateDesignerText = async (commId: string, update: DesignerDecisionTalk) => {
        window.analytics.track((currentUser as User).firstName + " " + (currentUser as User).lastName  + ' updated decision on company - ' + update);
        await updateDesignerDecision(commId, update)
        message.success("Updated Decision")
        setCommList(await getDesignCommunicationsList(currentUser.id))
    }

    useEffect(() => {
        getDesignCommunicationsList(currentUser.id).then((commList: CommForDesigner[]) => {
            setCommList(commList)
        })
    }, [])

    if (!((currentUser as User).completedQuiz)) {
        return (<QuizScreen changeCurrentUser={updateUser}/>)
    }

    if (!(currentUser as User).graded) {
        return (<Typography>It looks you have not been reviewed by our staff yet. Check back later!</Typography>)
    } else {
        if ((currentUser as User).communications === null || (currentUser as User).communications === []) {
            return (<Typography>Our employers are currently taking a look at your profile and will reach out if they express interest in you.</Typography>)
        } else {
            if (commList === undefined) {
                return (<Loading />)
            } else {
                if ((currentUser as User).grade.score === 0) {
                    return (<Typography>I'm sorry. We have chosen not to continue with your application. Please contact us if you have any questions about this decision.</Typography>)
                }

                return (<CommunicationsList communicationList={commList} updateDesignerText={updateDesignerText}/>)
            }
        }
    }
}

export default ViewCommunications