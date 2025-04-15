import React from 'react'

const Categories = () => {
  return (
    <section className='grid grid-cols-2 grid-flow-dense gap-4 mt-4 md:grid-cols-4 justify-center items-center p-4 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-200'>
        <button>Adventure</button>
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