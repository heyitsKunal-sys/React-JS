import React from 'react'
import { useSelector , useDispatch} from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
//   the above line means we are accessing the value of the counter from the redux store using useSelector hook. The state parameter represents the entire redux store state, and we are accessing the counter slice of the state and then getting the value property from it.
  const dispatch = useDispatch()
//   here we use  useDispatch hook to get the dispatch function from the redux store. This function is used to dispatch actions to the store, which will then be handled by the reducers to update the state.

  return (
    <div>iam a navbar and counter is : {count}</div>
  )
}

export default Navbar