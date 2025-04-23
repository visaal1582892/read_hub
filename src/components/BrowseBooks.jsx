import React from 'react'
// import { Outlet } from 'react-router-dom'
import Books from './Books';
import { useParams,useNavigate } from 'react-router-dom';

const BrowseBooks = () => {

  const navigate = useNavigate();
  const { category } = useParams();
  const [search, setSearch] = React.useState('');

  // Handling Searching
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  // Handling Category Change
  const handleSelect = (event) => {
    navigate(`/browseBooks/${event.target.value}`);
  }

  return (
    <main className='flex flex-row justify-center gap-[7%] items-center w-[90%] flex-wrap'>

      {/* Search Form */}
      <form action="." method="post" className='flex flex-col items-center border-2 border-orange-300 rounded-lg w-[90%] sm:w-sm h-20 text-orange-500 font-medium  bg-white p-2 justify-around'>
        <label className='flex items-center w-[90%] justify-around'>
          <img src="/images/searchIcon.png" alt="searchIcon" className='w-8'/>
          <input type="text" placeholder='Search books or authors' name='search' className='border-2 border-blue-300 rounded-lg px-2 py-1 placeholder:text-gray-400/60 outline-none font-medium ml-3 w-[90%] hover:border-blue-500 focus:border-blue-500' value={search} onInput={(event) => handleSearch(event)}/>
        </label>
      </form>

      {/* Filter By Category: {category} */}
      <section className='flex flex-wrap items-center justify-center w-[90%] sm:w-sm h-20 text-orange-500 font-medium bg-white p-2 rounded-lg border-2 border-orange-300'>
        <label className='flex items-center justify-around w-80 font-medium'>
          <p className='text-blue-500'>Filter By</p>
          <select name="category" id="category" value={category} className='border-2 border-blue-300 rounded-lg px-2 py-1 placeholder:text-gray-400/60 outline-none font-medium ml-1 w-[70%] hover:border-blue-500 focus:border-blue-500' onChange={(event) => handleSelect(event)}>
            <option value="All">All</option>
            <option value="Adventure">Adventure</option>
            <option value="Classic">Classic</option>
            <option value="Epic">Epic</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </label>
      </section>

      <Books category={category} search={search} />
      
    </main>

  )
}

export default BrowseBooks