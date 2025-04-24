import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSuccess, setError, setIdeal } from "../utils/responseSlice";
import { addBook } from '../utils/dataSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddBook = () => {
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    let nbooks=useSelector((state)=>state.data.books.length+1);
    const [range,setRange]=useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data={id:nbooks+1};
        [...event.target].forEach(item=>item.name!=""?data[item.name]=item.value.trim():null);
        if(data["title"].length==0){
            dispatch(setError("Error: Book title cannot be empty."));
        }
        else if(/[0-9]+/.test(data["author"])){
            dispatch(setError("Error: Author name must only consist of letters."));
        }
        else if(data["author"].length==0){
            dispatch(setError("Error: Author name cannot be empty."));
        }
        else if(data["publication_year"].length==0){
            dispatch(setError("Error: Published year cannot be empty."));
        }
        else if(data["outline"].length<=5){
            dispatch(setError("Error: Outline must contain atleast 6 characters."));
        }
        else{
            dispatch(addBook(data));
            dispatch(setSuccess("Book Added Succesfully"));
            navigate('/browseBooks/All');
        }
        setTimeout(()=>dispatch(setIdeal()),3500);
    }

  return (
    <section className='w-[90%] flex flex-col items-center mb-5'>
        <h2 className='text-blue-500 text-2xl font-medium text-center mb-5'>Add new books below</h2>
        <form className='grid grid-cols-7 bg-white w-[100%] p-3 text-lg text-orange-500 items-center rounded-lg gap-4 md:w-lg' onSubmit={(event)=>handleSubmit(event)}>
            
            {/* Title Input */}
            <label htmlFor="title" className='text-blue-500 col-span-2 font-medium'>Title: </label>
            <input type="text" name="title" className='col-span-5 outline-none border-2 border-blue-300 p-1 rounded-md hover:border-blue-500'/>

            {/* Author Input */}
            <label htmlFor="author" className='text-blue-500 col-span-2 font-medium'>Author: </label>
            <input type="text" name="author" className='col-span-5 outline-none border-2 border-blue-300 p-1 rounded-md hover:border-blue-500'/>

            {/* Published Year Input */}
            <label htmlFor="publication_year" className='text-blue-500 col-span-2 font-medium'>Published In: </label>
            <input type="number" name="publication_year" min="1500" max={new Date().getFullYear()} className='col-span-5 outline-none border-2 border-blue-300 p-1 rounded-md hover:border-blue-500'/>

            {/* Genre Input */}
            <label htmlFor="genre" className='text-blue-500 col-span-2 font-medium'>Genre</label>
            <select name="genre" className='col-span-5 outline-none border-2 border-blue-300 p-1 rounded-md hover:border-blue-500'>
            <option value="Adventure">Adventure</option>
            <option value="Classic">Classic</option>
            <option value="Epic">Epic</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Science Fiction">Science Fiction</option>
            </select>

            {/* Description Input */}
            <label htmlFor="outline" className='text-blue-500 col-span-2 font-medium'>Outline: </label>
            <textarea name="outline" className='col-span-5 outline-none border-2 border-blue-300 p-1 rounded-md hover:border-blue-500 field-sizing-content min-h-[2.2em]'></textarea>

            {/* rating Input */}
            <label htmlFor="rating" className='text-blue-500 col-span-2 font-medium'>Rating: </label>
            <input type="range" name="rating" className='col-span-4 p-1' min="0" max="5" step="1" value={range} onChange={(event)=>setRange(event.target.value)} />
            <p className='text-right font-medium text-xl px-3'>{range}</p>

            {/* Submit Button */}
            <button className='col-start-3 col-span-3 w-35 mx-auto mt-6'>Add Book</button>
        </form>
    </section>
  )
}

export default AddBook