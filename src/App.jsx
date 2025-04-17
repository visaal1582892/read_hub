import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import useFetch from './utils/useFetch';
import './App.css';

function App() {

  // Using custom useFetch for fetching the data and storing in redux store
  useFetch('/api/v1/books');

  return (
    <div className='w-[100vw] flex flex-col items-center'>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
