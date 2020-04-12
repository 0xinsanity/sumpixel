import React from 'react'
import { useRouter } from 'next/router'

const Profile: React.FC = () => {
  const router = useRouter()
  const { profile_id } = router.query

  return <></>
}

export default Profile