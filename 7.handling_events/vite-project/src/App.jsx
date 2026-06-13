import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("kunal")
  const [form, setForm] = useState({email:"" , phone:""})


  const handleClick = () => {
    alert('hey iam click')

  }
  const handleMouseOver = () => {
    alert('hey iam a mouse over')

  }
  // const handleChange = (e) => {
  //   setName(e.target.value)

  // }
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    console.log("form")

  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>cLICK ME</button>
      </div>
      <div className='mouse'>
        <div className="red" onMouseOver={handleMouseOver}>Iam a red div</div>
      </div>
      <input type="text" value={name} onChange={handleChange} />
      {/* yahan upr agr hum onChnage ka use na kre to input field ko hum change n kr skte */}
      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
