import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex h-[6vh] bg-orange-100 text-white p-4 justify-center items-center w-screen place-items-center place-content-center sm:justify-end border-b-2 border-orange-300 shadow-lg shadow-orange-200'>
        <blockquote className='hidden mr-auto ml-[6%] text-blue-600 font-medium text-sm md:inline-block leading-4 animate-sliding'>"ReadHub — your digital gateway to endless knowledge."</blockquote>
        <Link to='/'>Home</Link>
        <Link to='/browseBooks'>Browse Books</Link>
        <Link to='/addBook'>Add Book</Link>
    </nav>
  )
}

export default Navbar