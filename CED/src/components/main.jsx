import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Customers from './customers'
import Employees from './employees'
import Estimates from './estimates'
import Header from './header'
import Invoices from './invoices'
import NavBar from './navbar'
import Projects from './projects'





const Main = (props) => {
    



    return (


  
           <Routes>
                <Route path='/' element={<Header  />}/>
                <Route path='/employees' element={<Employees employees={props.employees}/>}/>
                <Route path='/customers' element={<Customers customers={props.customers}/>}/>
                <Route path='/estimates' element={<Estimates/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/projects' element={<Projects projects={props.projects}/>}/>


            </Routes>

     
    )

}


export default Main