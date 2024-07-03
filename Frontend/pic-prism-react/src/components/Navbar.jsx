/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex flex-col sm:flex-row justify-between items-start px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30'>
            {/* logo and site name */}
            <div className='flex justify-between  items-center'>
                {/* i will add image */}
                <Link to={"/"} className='font-bold text-3xl'>PicPrism</Link>
            </div>
            {/* list of other tabs */}
            <ul className='flex  items-center gap-5 text-lg text-gray-400'>
                <Link to={'/'} className='hover:text-black cursor-pointer sm:p-2'>About</Link>
                <Link to={'/'} className='hover:text-black cursor-pointer sm:p-2'>Contact</Link>
                <Link to={'/login'} className='hover:text-black cursor-pointer sm:p-2'>Login</Link>
                <Link to={'/signup'} className='hover:text-black cursor-pointer sm:p-2'>Sign Up</Link>
            </ul>
        </nav>
    )
}

export default Navbar