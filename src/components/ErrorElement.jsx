import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const navigate=useNavigate();
    const errorObj=useRouteError();
    console.log(errorObj)
    console.log(errorObj.error.message)
    console.log(errorObj.status)
    console.log(errorObj.statusText)

  return (
    <section className='bg-white w-[90vw] sm:w-[70vw] my-[18vh] rounded-xl flex flex-row flex-wrap p-5 justify-center text-blue-500 animate-fadingIn gap-x-[2%]'>
        {/* Back to Home Button */}
        <section className='w-[100%] h-15 m-3'>
            <button onClick={()=>navigate('/')}>← Back to Home</button>
        </section>
        <img src="/images/errorIcon.png" alt="errorIcon" className='size-60' />
        <section className='sm:w-[50%] flex flex-col justify-start pt-7 items-center w-[100%]'>
            <h1 className='font-medium text-2xl'>{errorObj.status}-{errorObj.statusText}</h1>
            <p className='text-orange-500 text-lg mt-5 text-center'>{errorObj.error.message}</p>
            <p className='text-orange-500 text-lg mt-5 text-center'>Click back to home to move back to home page</p>
        </section>
    </section>
  )
}

export default ErrorElement