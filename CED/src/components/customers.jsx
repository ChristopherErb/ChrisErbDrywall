import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'


const Customers = (props) => {



    return (
<div>
{props.customers.map((customer) => (
<div class="card">

 
  <img class="card-img-top" src="jpg.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"key={customer.customerId}>{customer.business_name}</h5>
    <p class="card-text">{customer.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Project Manager: {customer.manager}</li>
    <li class="list-group-item">Customer's Address {customer.address}</li>
    <li class="list-group-item">Negotiated Price {customer.price_sqft}</li>

  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>

  </div>


</div>
))} 
</div>

    )
}










export default Customers