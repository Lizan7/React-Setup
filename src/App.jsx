import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Lin, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login" 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowseRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowseRouter>
 
    </div>
  )
}

export default App
