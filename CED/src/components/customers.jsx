import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'


const Customers = (props) => {



    return (
        <div>
        <h1>Here's Customers</h1>
        {props.customers.map((customer) => (
          <h3 key={customer.customerId}>{customer.manager}</h3>
        ))}

      </div>
    )
}


export default Customers