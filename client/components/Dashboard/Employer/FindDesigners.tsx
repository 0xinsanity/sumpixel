import React, {useEffect, useContext, useState} from 'react'
import { getGradedDesigners } from '../../../lib/server'
import { User } from '../../../model/model'
import {UserContext} from '../../../lib/UserProvider'
import Loading from '../../General/Loading'
import {Employer} from '../../../model/model'
import DesignerList, {FindDesignerListType} from './DesignerList'
import {storage_ref} from '../../../lib/firebase'
import _ from 'lodash'

const FindDesigners: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)
    const [designerList, setDesignerList] = useState<FindDesignerListType[] | undefined>(undefined)

    useEffect(() => {
        var id = currentUser.id
        if ((currentUser as Employer).isAnonymous !== undefined) {
            id = "60fff552-280b-47ae-b632-25a744a7a910"
        }
        getGradedDesigners(id).then(async (commList: User[]) => {
            const updatedList = await Promise.all(_.map(commList, async (user: User) => {
                let profilePic = ''
                if (user.profilePic !== undefined) {
                    try {
                        profilePic = await storage_ref.child('profilePic/' + user.profilePic).getDownloadURL()
                    } catch (e) {
                        console.error(e)
                    }
                }
                return {
                    name_feedback: [(user.firstName + " " + user.lastName), user.grade.response, profilePic],
                    score: user.grade.score,
                    location: user.location,
                    primary_skill: user.designType,
                    contact: user
                }
            }))
            console.log(updatedList)
            setDesignerList(updatedList as FindDesignerListType[])
        })
    }, [currentUser])

    if (designerList === undefined) {
        return (<Loading />)
    }
    return (<DesignerList designerList={designerList}/>)
}

export default FindDesigners