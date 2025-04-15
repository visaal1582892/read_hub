import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import useFetch from './utils/useFetch';
import './App.css';
import store from './utils/store';

function App() {

  // Using custom useFetch for fetching the data and storing in redux store
  useFetch('/api/v1/books');

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
