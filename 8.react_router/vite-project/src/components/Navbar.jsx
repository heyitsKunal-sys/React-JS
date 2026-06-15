import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div>
      <nav>
        <a href="/home"><li>home</li></a>
        <a href="/about"><li>about</li></a>
        <a href="/login"><li>login</li></a>
        {/* <NavLink className='{(e)=>{return e.isActive?"red": ""}}' to="/home"><li>Home</li> </NavLink>
        <NavLink className='{(e)=>{return e.isActive?"red": ""}}' to="/about"><li>About</li> </NavLink>
        <NavLink className='{(e)=>{return e.isActive?"red": ""}}' to="/login"><li>Login</li> </NavLink> */}
        {/* to change the color of navlink */}

      </nav>
    </div>
  )
}

export default Navbar