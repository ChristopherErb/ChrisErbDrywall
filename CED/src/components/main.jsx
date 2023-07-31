import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Customers from './customers'
import Employees from './employees'
import Estimates from './estimates'
import Header from './header'

import NavBar from './navbar'
import Projects from './projects'
import Contact from './contact'





const Main = (props) => {
    



    return (


  
           <Routes>
                <Route path='/' element={<Header  />}/>
                <Route path='/employees' element={<Employees employees={props.employees}/>}/>
                <Route path='/customers' element={<Customers customers={props.customers}/>}/>
                <Route path='/estimates' element={<Estimates/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/projects' element={<Projects projects={props.projects}/>}/>


            </Routes>

     
    )

}


export default Main