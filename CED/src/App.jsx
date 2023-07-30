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
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [customers, setCustomers] = useState([])
  const [projects, setProjects] = useState([])
  const [employees, setEmployees] = useState([])
  

  useEffect (() => {
    const getCustomers = async () => {
      try{
        const response = await axios.get(`${BASE_URL}/customers`)
        console.log(response)
        setCustomers(response.data)
      } catch (error) 
      {console.error('error with customers useEffect', error)}
    }

    const getProjects = async () => {
      try{
        const response = await axios.get(`${BASE_URL}/projects`)
        console.log(response)
        setProjects(response.data)
      }catch (error) 
      {console.error('error with projects useEffect', error)}
    }

    const getEmployees = async () => {

      try{
      const response = await axios.get(`${BASE_URL}/employees`)
      console.log(response)
      setEmployees(response.data)
      } catch (error) {
          console.error('Error with useEffect', error)
      }
    }



    getEmployees()
    getCustomers()
    getProjects()
  },[])





 




  return (
    <div className='App'>

    
    <div>

    </div>
      <NavBar /> 
      <Main projects={projects} customers={customers} employees={employees} />

    </div>
  )
}

export default App
