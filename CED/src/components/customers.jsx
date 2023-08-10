import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./navbar";
import { BASE_URL } from '../globals';

const Customers = (props) => {
  const { customerId } = useParams();
  const [customers, setCustomers] = useState([]);
  const [EditCustomer, setEditCustomer] = useState(null);

  const refresh = () => window.location.reload(true);

  useEffect(() => {
    //UPDATE
    axios.get(`${BASE_URL}/customers`)
    .then((response) => {
      setCustomers(response.data);
    })
    .catch((error) => {
      console.error("error fetching customers", error);
    });
}, []);

  const handleEdit = (customer) => {
    setEditCustomer(customer);
    setEditManager(customer.manager);
    setEditAddress(customer.address);
    setEditPriceSqft(customer.price_sqft);
  };

  const handleUpdate = () => {
    axios
      .put(`${BASE_URL}/customers/${EditCustomer.id}`, EditCustomer)
      .then((response) => {
        console.log("Customer updated", response.data);
        setCustomers((prevCustomers) =>
          prevCustomers.map((customer) =>
            customer.id === EditCustomer.id ? EditCustomer : customer
          )
        );
        setEditCustomer(null);
      })
      .catch((error) => {
        console.error("error updating", error);
        if (error.response) {
          console.log("Response status:", error.response.status);
        }
      });
  };


  console.log(props)
  //DELETE
  const handleDelete = (customerId) => {
    console.log(props.customers);
    axios
      .delete(`${BASE_URL}/customers/${customerId}`)
      .then((response) => {
        console.log("deleted", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("error deleting", error);
      });
  };

  return (
    <div>
      <header className="header">
        <h1>Our Loyal Customers</h1>
      </header>
      <div className="card-container">
        {customers.map((customer) => (
          <div className="card">
            <img className="card-img-top" src="jpg.jpg" alt="Card image cap" />
            <div className="card-body">
              {EditCustomer && EditCustomer.id === customer.id ? (
                <div>
                  <input
                    type="text"
                    value={EditCustomer.business_name}
                    onChange={(e) =>
                      setEditCustomer({
                        ...EditCustomer,
                        business_name: e.target.value,
                      })
                    }
                  />
                  <textarea
                    value={EditCustomer.description}
                    onChange={(e) =>
                      setEditCustomer({
                        ...EditCustomer,
                        description: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={EditCustomer.manager}
                    onChange={(e) =>
                      setEditCustomer({
                        ...EditCustomer,
                        manager: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={EditCustomer.address}
                    onChange={(e) =>
                      setEditCustomer({
                        ...EditCustomer,
                        address: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value={EditCustomer.price_sqft}
                    onChange={(e) =>
                      setEditCustomer({
                        ...EditCustomer,
                        price_sqft: e.target.value,
                      })
                    }
                  />
                </div>
              ) : (
                <>
                  <h5 className="card-title">{customer.business_name}</h5>
                  <p className="card-text">{customer.description}</p>
                  <p className="card-text">
                    Project Manager: {customer.manager}
                  </p>
                  <p className="card-text">
                    Contact Information: {customer.address}
                  </p>
                  <p className="card-text">
                    Offered price per square foot: {customer.price_sqft}
                  </p>
                </>
              )}
            </div>
            <div className="card-body">
              {EditCustomer && EditCustomer.id === customer.id ? (
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={() => handleEdit(customer)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-danger btn-lg btn-block"
                onClick={() => handleDelete(customer.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;

