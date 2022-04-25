import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppBody from './components/AppBody/AppBody'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  // const [bool, setBool] = useState(false)
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={ <AppBody /> } />
        <Route exact path='/auth' element={ <Auth /> } />
      </Routes>
    </div>
  )
}