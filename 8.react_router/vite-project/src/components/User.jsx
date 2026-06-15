import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const parms = useParams()
  return (
    <div>
        iam a user {parms.username}
        </div>
  )
}

export default User