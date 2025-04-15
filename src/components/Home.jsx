import React from 'react'
import Categories from './Categories'
import PopularBooks from './PopularBooks'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-start bg-radial from-orange-100 to-blue-100'>    
        <h2 className='text-[1.5em] text-blue-600 font-medium mt-4'>Welcome To Read Hub</h2>
        <Categories />
        <PopularBooks />
    </main>
  )
}

export default Home