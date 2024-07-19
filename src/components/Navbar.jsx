import React from 'react'
import logo from "../assets/Top.png"

const Navbar = () => {
  return (<>
    {/* navbar main container */}
    <nav className='w-screen bg-white h-28 flex justify-between items-center px-10' >
    <img className='' src={logo}/>
    {/* Nav items */}
    <div className='flex justify-between gap-20 text-2xl font-normal text-black'>
      <span>Home</span>
      <span>Request</span> 
      <span>About Us</span>
    </div> 
    <div className='flex gap-10'>
        <button className=' bg-blue-700 p-2.5 px-6 rounded-md text-white'>Login</button>
    </div>   
 </nav>
 </>
  )
}

export default Navbar
