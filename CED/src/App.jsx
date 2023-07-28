import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import NavBar from './components/navbar'
import Main from './components/main'
import axios from 'axios'
import { BASE_URL } from './globals'
import Employees from './components/employees'

function App() {



  return (
    <div className='App'>

    
    <div>


    </div>
      <NavBar /> 
      <Main />

    </div>
  )
}

export default App
