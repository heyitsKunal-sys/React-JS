import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Components1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>Components1
        {counter}
    </div>
  )
}

export default Components1