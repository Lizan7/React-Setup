import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* navbar main container */}
     <nav className='w-screen bg-blue-400 h-28 flex justify-between items-center px-10' >
        <img className='w-24 h-24' src="data:image/png;base64,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" alt="" />
        {/* Nav items */}
        <div className='flex justify-between gap-20 text-2xl font-normal text-white'>
          <span>Home</span>
          <span>Blog</span> 
          <span>Contact</span>
          <span>About Us</span>
        </div> 
        <div className='flex gap-10'>
            <button className='bg-orange-400 p-2 px-5 rounded-md'>Signup</button>
            <button className=' bg-orange-400 p-2 px-5 rounded-md'>Login</button>
        </div>   
     </nav>
    </>
  )
}

export default App