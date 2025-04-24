import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const Books = (props) => {
    const search=props.search;
    const category=props.category;

    // Filtering books based on category and search query
    const books=useSelector((state) => state.data.books).filter((book) => (category == 'All' || book.genre==category || book.genre.includes(category)) && (book["title"].toLowerCase().includes(search.toLowerCase()) || book["author"].toLowerCase().includes(search.toLowerCase())));

    // Using selector to get the loading and error state from the redux store
    const loading=useSelector((state) => state.data.loading);
    const error=useSelector((state) => state.data.error);

    return (
        /* displaying requested books */
        <section className='w-[100%] flex flex-wrap items-center justify-center gap-4 mt-6 mb-6'>
          <h2 className='text-[1.5em] text-blue-600 font-medium my-4 w-[100%] text-center'>{category} Books</h2>
          {
            loading ? (<p className='text-center text-2xl text-blue-500 font-medium'>Loading ...</p>) : 
            error ? (<p className='text-center text-2xl text-red-500 font-medium'>Error : Error Occured While Fetching Data</p>) : books.length!=0?books.map((book) => { return <BookCard key={book.id} book={book} /> }): (<p className='text-center text-2xl text-orange-500 font-medium'>No Books Found For Your Search</p>)
          }
      </section>
    )
}

export default Books