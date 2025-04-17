import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className='grid grid-cols-2 grid-flow-dense gap-4 mt-4 md:grid-cols-4 justify-center items-center p-4 rounded-tl-4xl rounded-br-4xl bg-white border-2 border-blue-500 shadow-lg shadow-slate-300 hover:scale-102 transition-transform duration-300 ease-in-out'>
        <button><Link to='/'>Adventure</Link></button>
        <button>Classic</button>
        <button>Epic</button>
        <button>Fantasy</button>
        <button>Fantasy</button>
        <button>Fantasy</button>
        <button>Fiction</button>
        <button>Historical Fiction</button>
        <button className='md:col-start-2'>Horror & Mystery</button>
        <button className='md:col-start-3'>Science Fiction</button>
    </section>
  )
}

export default Categories