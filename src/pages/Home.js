import React from 'react'
import Navbar from '../components/Navbar'
import Movies from './Movies'
import {Routes, Route} from 'react-router-dom'



const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Movies />
    
    

    </div>
  )
}

export default Home