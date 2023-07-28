import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'



const NavBar = () => {





    return (
        <div className='nav_bar'>
            <Link to='/'><span>Home</span></Link>   
            <Link to='/employees'><span>Our team!</span></Link>   
            <Link to='/customers'><span>Our Amazing Customers</span></Link>   
            <Link to='/estimates'><span>Estimates</span></Link>   
            <Link to='/invoices'><span>Invoices</span></Link>   
            <Link to='/projects'><span>Projects</span></Link>   
 

        </div>
    )

}


export default NavBar