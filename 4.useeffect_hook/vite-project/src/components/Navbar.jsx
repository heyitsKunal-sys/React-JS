import React , {useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert('color heyyyyy')
    
      
    }, [color])
    
  return (
    <div>hey iam a navbar {color}</div>
  )
}

export default Navbar