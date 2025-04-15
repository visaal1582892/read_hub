import React from 'react'

const BookCard = () => {
  return (
    <article className='flex flex-col items-center justify-center bg-white rounded-lg shadow-lg shadow-gray-200 p-4 border-2 border-blue-500'>
        <img src="/images/favIcon.png" alt="image" className='h-36 w-16' />
        <h3 className='text-[1.5em] text-blue-600 font-semibold'>Book Title</h3>
        <p className='text-sm text-gray-600'>Author Name</p>
        <p className='text-sm text-gray-600'>1940</p>
    </article>
  )
}

export default BookCard;