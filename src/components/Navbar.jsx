import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex h-[5vh] bg-orange-100 text-white p-4 justify-center items-center w-[100%] place-items-center place-content-center sm:justify-end border-b-2 border-orange-300 mb-5'>
        <blockquote className='hidden mr-auto ml-[6%] text-blue-600 font-medium text-sm md:inline-block leading-4 animate-sliding'>"ReadHub — your digital gateway to endless knowledge."</blockquote>
        <Link to='/' className='navlink'>Home</Link>
        <Link to='/browseBooks' className='navlink'>Browse Books</Link>
        <Link to='/addBook' className='navlink'>Add Book</Link>
    </nav>
  )
}

export default Navbar