import React from 'react'
import BookCard from './BookCard'

const PopularBooks = () => {
  return (
    <section className='flex flex-col items-center justify-start mt-6 overflow-x-hidden' >
        <h3 className='text-[1.8em] text-blue-600 font-medium'>Popular Books</h3>
        <section className='flex justify-around items-center flex-nowrap w-[80%] mt-4 mb-8 overflow-x-auto overflow-y-hidden'>
            <BookCard />
            <BookCard />
            {/* <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard /> */}
        </section>
    </section>
  )
}

export default PopularBooks