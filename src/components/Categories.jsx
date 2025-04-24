import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Categories = () => {

  const navigate = useNavigate();

  // Handling category button click
  const handleCategoryClick = (event) => {
    
    const category = event.target.textContent;
    navigate(`browseBooks/${category}`);
  }

  return (
    <section className='grid grid-cols-2 grid-flow-dense gap-4 mt-4 md:grid-cols-4 justify-center items-center p-4 rounded-tl-4xl rounded-br-4xl bg-white border-2 border-blue-500 shadow-lg shadow-slate-300 hover:scale-102 transition-transform duration-300 ease-in-out text-sm'>
        <button onClick={handleCategoryClick}>Adventure</button>
        <button onClick={handleCategoryClick}>Classic</button>
        <button onClick={handleCategoryClick}>Epic</button>
        <button onClick={handleCategoryClick}>Fantasy</button>
        <button onClick={handleCategoryClick}>Fantasy</button>
        <button onClick={handleCategoryClick}>Fantasy</button>
        <button onClick={handleCategoryClick}>Fiction</button>
        <button onClick={handleCategoryClick}>Historical Fiction</button>
        <button className='md:col-start-2' onClick={handleCategoryClick}>Horror</button>
        <button className='md:col-start-3' onClick={handleCategoryClick}>Science Fiction</button>
    </section>
  )
}

export default Categories