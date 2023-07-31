import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'


const Customers = (props) => {



    return (
        <div>
        <h1>Here's Customers</h1>
        {props.customers.map((customer) => (
        <div>
          <h2 key={customer.customerId}>{customer.business_name}</h2> <br/>
          <h4>{customer.description}</h4> <br/>
          <h4>{customer.manager}</h4> <br/>
          <h4>{customer.address}</h4> <br/>
          <h4>{customer.price_sqft}</h4> <br/>
        </div>
        ))}

      </div>
    )
}


export default Customers