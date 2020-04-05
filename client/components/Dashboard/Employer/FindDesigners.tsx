import React, {useEffect, useContext, useState} from 'react'
import { getGradedDesigners } from '../../../lib/server'
import { User } from '../../../model/model'
import {UserContext} from '../../../lib/UserProvider'
import Loading from '../../General/Loading'
import DesignerList from './DesignerList'

const FindDesigners: React.FC = (props) => {
    const {currentUser, changeUser}  = useContext(UserContext)
    const [designerList, setDesignerList] = useState<User[] | undefined>(undefined)

    useEffect(() => {
        getGradedDesigners(currentUser.id).then((commList: User[]) => {
            console.log(commList)
            setDesignerList(commList)
        })
    }, [currentUser])

    if (designerList === undefined) {
        return (<Loading />)
    }

    return (<DesignerList designerList={designerList}/>)
}

export default FindDesigners