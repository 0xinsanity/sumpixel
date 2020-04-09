import React, {useEffect, useContext, useState} from 'react'
import { getGradedDesigners } from '../../../lib/server'
import { User } from '../../../model/model'
import {UserContext} from '../../../lib/UserProvider'
import Loading from '../../General/Loading'
import DesignerList, {FindDesignerListType} from './DesignerList'
import _ from 'lodash'

const FindDesigners: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)
    const [designerList, setDesignerList] = useState<FindDesignerListType[] | undefined>(undefined)

    useEffect(() => {
        getGradedDesigners(currentUser.id).then((commList: User[]) => {
            console.log(commList)
            setDesignerList(_.map(commList, (user: User) => ({
                name_feedback: [(user.firstName + " " + user.lastName), user.grade.response],
                score: user.grade.score,
                expiration: '3 Days',
                experience: '4 Years',
                primary_skill: user.designType,
                contact: user
            })))
        })
    }, [currentUser])

    if (designerList === undefined) {
        return (<Loading />)
    }
    return (<DesignerList designerList={designerList}/>)
}

export default FindDesigners