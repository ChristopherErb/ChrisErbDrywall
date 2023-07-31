import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./navbar";

const Customers = (props) => {
  return (
    <div>
      <header className="header">
        <h1>Our Loyal Customers</h1>
      </header>

      <div className="card-container">
        {props.customers.map((customer) => (
          <div className="card">
            <img className="card-img-top" src="jpg.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title" key={customer.customerId}>
                {customer.business_name}
              </h5>
              <p className="card-text">{customer.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Project Manager: {customer.manager}
              </li>
              <li className="list-group-item">
                Customer's Address {customer.address}
              </li>
              <li className="list-group-item">
                Negotiated Price {customer.price_sqft}
              </li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
