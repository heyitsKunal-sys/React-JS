import React from 'react'
import {memo} from 'react'
// memo ko use karne se component ko sirf tab render karne ka kaam milega jab uske props change honge.

const Navbar = memo(({adjective , getAdjective}) => {
    console.log("Navbar rendered")
  return (
    <div>
        iam a {adjective} Navbar
        <button onClick={getAdjective}>Change Adjective{getAdjective}</button>
        {/* // jab bhi getAdjective function ko call karenge to Navbar component re-render hoga. isliye hum useCallback hook ka use karenge taki ye function baar baar create na ho. */}
        {/* app.jsx jab bhi rrender hoga tab getAdjective function create hoga change hoga
        getAdjective() === getAdjective2() false honge  
        isliye Navbar ko lagega ki prop change hoga isliye ye navbar component rerender hoga  
        hume react ko ye batana h ki harr rerender pe mera getAdjecctive function same h isilye we use "useCallback*/}
        
    </div>
  )
})

export default Navbar