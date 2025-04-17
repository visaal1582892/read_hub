import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4 flex justify-center items-center w-[100%] place-items-center place-content-center h-[15vh] overflow-x-hidden'>
        <img src="/images/headerIcon.png" alt="headerIcon" className='size-[2.5em] inline-block mr-5' />
        <h1 className='text-center font-medium tracking-wider ss:w-0 ss:overflow-hidden ss:whitespace-nowrap ss:animate-opening'>Read Hub</h1>
    </header>
  )
}

export default Header