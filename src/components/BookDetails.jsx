import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BookDetails = () => {
    const { id }=useParams();
    const book=useSelector((state)=>state.data.books).filter((book)=>book.id==id)[0];
    const loading=useSelector((state)=>state.data.loading)
    let rating=book?book.rating:4;
    const ratingArray=[]
    for(let i=0; i<5; i++){
        if(rating>0){
            ratingArray.push(1);
            rating--;
        }
        else{
            ratingArray.push(0)
        }
    }
    return (
        loading?<p className='flex justify-center items-center text-xl text-orange-500 h-[50vh] text-center w-[100%]'>Loading...</p>:<article className='flex flex-col bg-white w-[90%] justify-between items-center md:flex-row p-5 rounded-xl'>
            <img src="https://png.pngtree.com/template/20210908/ourmid/pngtree-creative-and-realistic-book-dummy-image_633548.jpg" alt="dummyImage" className='w-[60%] md:w-[30%]'/>
            <section className='text-black w-[100%] md:w-[60%] grid grid-cols-4 items-center'>
                <h2 className='text-blue-500 text-xl col-span-4 p-2 text-start'>{book.title}</h2>
                <label className='text-gray-600 text-sm col-span-1 p-2'>written by: </label>
                <p className='text-orange-500 text-lg col-span-3 p-2'>{book.author}</p>
                <label className='text-gray-600 text-sm col-span-1 p-2'>published in: </label>
                <p className='text-orange-500 text-lg col-span-3 p-2'>{book.publication_year}</p>
                <label className='text-gray-600 text-sm col-span-1 p-2'>outline: </label>
                <p className='text-orange-500 text-lg col-span-3 p-2'>{book.description}</p>
                <label className='text-gray-600 text-sm col-span-1 p-2'>genre: </label>
                <p className='text-orange-500 text-lg col-span-3 p-2'>{book.genre[0]}, {book.genre[1]}</p>
                <label className='text-gray-600 text-sm col-span-1 p-2'>rating: </label>
                <div className='flex justify-around w-60 col-span-3 p-2'>
                    {ratingArray.map((star,i)=><img key={i} src={`/images/star${star}.png`} className='w-[10%]'/>)}
                </div>
            </section>
        </article>
    )
}

export default BookDetails