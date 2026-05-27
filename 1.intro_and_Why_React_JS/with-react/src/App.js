import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <div className='value'>{value}

      </div>
      <button onClick={()=>{setValue(value +1)}}> Click me</button>
      <Footer />
    </div>
    
  );
}

export default App;
