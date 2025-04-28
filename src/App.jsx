import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Response from './components/Response';
import { Outlet } from 'react-router-dom';
import useFetch from './utils/useFetch';
import './App.css';

function App() {

  // Using custom useFetch for fetching the data and storing in redux store

  // For development
  // useFetch('/api/v1/books');

  // For Deployment
  useFetch('https://www.freetestapi.com/api/v1/books');

  return (
    <div className='w-[100vw] flex flex-col items-center'>
      <Header />
      <Navbar />
      <Response />
      <Outlet />
    </div>
  )
}

export default App
