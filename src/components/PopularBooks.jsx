import React from 'react'
import BookCard from './BookCard'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PopularBooks = () => {

  // Using selector to get the popular books from the redux store
  const navigate = useNavigate();
  const loading=useSelector((state) => state.data.loading);
  const error=useSelector((state) => state.data.error);
  const popularBooks = useSelector((state) => state.data.books).slice(0,10);


  return (
    <section className='flex flex-col items-center justify-start my-6 overflow-auto w-[100%] space-y-2' >
        <h3 className='text-[1.3em] text-blue-600 font-medium'>Popular Books</h3>
        <section className='flex overflow-x-auto w-[85%] snap-x rounded-lg min-h-[30vh] items-center justify-center-safe gap-5 p-3'>
            {
              loading? <p className='text-center text-2xl text-blue-500 font-medium'>Loading...</p> : 
              error? <p className='text-center text-2xl text-red-500 font-medium'>Error : Error Occured While Fetching Data</p> :
              popularBooks.map((book) => {
                return (
                  <BookCard key={book.id} book={book} />
                )
              })
            }
        </section>
        <button className='my-4' onClick={() => navigate('browseBooks/All')}>view more</button>
    </section>
  )
}

export default PopularBooks