import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import NavBar from './components/navbar'
import Main from './components/main'
import axios from 'axios'
import { BASE_URL } from './globals'

function App() {

  const [stateCheck, setStateCheck] = useState()

  useEffect(() => {
    const getEmployees = async () => {
      const response = await axios.get(`${BASE_URL}/employees`)
      console.log(response)
      setStateCheck(response.data)




    }
    getEmployees()

  }, [])

  return (
    <div className='App'>

    
    <div>


    </div>




        {/* <Header />
        <Main />
        <NavBar /> */}

    </div>
  )
}

export default App
