import React from 'react'
import {Link}  from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='bg-red-500 text-white flex px-5 py-7 space-x-4 '>
            <Link>Home</Link>
            <Link>Contact Us</Link>
            <Link>About Us</Link>
            
        </ul>
    </div>
  )
}

export default Navbar