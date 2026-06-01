import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>the count is{count}</div>
     <button onClick={() => setCount(count + 1)}>increase</button>
     <button onClick={() => setCount(count - 1)}>decrease</button>
     <button onClick={() => setCount(0)}>reset</button>
    </>
  )
}

export default App
