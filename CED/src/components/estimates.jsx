import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./navbar";
import { BASE_URL } from "../globals";

const Estimates = () => {
  const initialState = {
    business_name: "",
    manager: "",
    address: "",
    price_sqft: "",
    description: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/customers/`, formState)
      .then((response) => {
        console.log("cstmr created", response.data);
        setFormState(initialState)
      })
      .catch((error) => {
        console.error("error making cstmr", error)
      })
  }

  return (
    <div>
            <header className="header">
        <h1>Need an estimate?</h1>
      </header>
      <div className="main-content">
      <h4>Leave your information below:</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="business_name">Business Name:</label>
          <input
            type="text"
            id="business_name"
            name="business_name"
            value={formState.business_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="manager">Manager:</label>
          <input
            type="text"
            id="manager"
            name="manager"
            value={formState.manager}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="address">Contact Number or Email:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="price_sqft">Timeframe</label>
          <input
            type="text"
            id="price_sqft"
            name="price_sqft"
            value={formState.price_sqft}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
          />
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">Get a quote!</button>
      </form>
    </div>
    </div>
  );
};

export default Estimates;
