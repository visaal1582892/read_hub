import React from 'react'

const Books = (props) => {

    const books=useSelector((state) => state.data.books);
    const loading=useSelector((state) => state.data.loading);
    const error=useSelector((state) => state.data.error);

    return (
        {/* displaying requested books */}
      <section className='w-[100%] flex flex-wrap items-center justify-center gap-4 mt-6 mb-6'>
      {
        loading?<p className='text-center text-2xl text-blue-500 font-medium'>Loading ...</p> : 
        error? <p className='text-center text-2xl text-red-500 font-medium'>Error : Error Occured While Fetching Data</p> :books.filter((book)=>(category=='All' || book.genre.includes(category)) && (book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))).map((book) => {return <BookCard key={book.id} book={book} />})
      }
    </section>
    )
}

export default Books