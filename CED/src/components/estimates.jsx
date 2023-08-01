import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./navbar";

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
      .post('http://localhost:8000/customers/', formState)
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
      <h2>Create New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price_sqft">Price per sqft:</label>
          <input
            type="text"
            id="price_sqft"
            name="price_sqft"
            value={formState.price_sqft}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default Estimates;
