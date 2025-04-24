import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = (props) => {
  const navigate=useNavigate();

  // Function to handle click on book card
  const handleClick = () => {
    // dispatch(setBook(props.book))
    navigate(`/books/${props.book.id}`)
  }
  return (
    <article className='flex flex-col items-center justify-between rounded-md shadow-lg shadow-gray-200 basis-40 h-60 grow-0 shrink-0 snap-center snap-always bg-white border-2 border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:opacity-80' onClick={handleClick}>
        <img src='https://png.pngtree.com/template/20210908/ourmid/pngtree-creative-and-realistic-book-dummy-image_633548.jpg' alt="dummyImage" className='w-[100%] h-[50%] rounded-md' />
        <div className='flex flex-col items-center justify-between w-[100%] h-[50%] p-2'>
        <h3 className='text-[1em] text-blue-600 font-semibold text-center '>{props.book.title}</h3>
        <p className='text-sm text-gray-600 text-center'>{props.book.author}</p>
        <p className='text-sm text-gray-600 text-center'>{props.book.publication_year}</p>
        </div>
    </article>
  )
}

export default BookCard;