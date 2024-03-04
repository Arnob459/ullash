import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import axios from 'axios';


const Order = () => {

  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      // Redirect to login if no token is found
      setRedirect(true);
      return;
    }

    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const userId = user.id;

    setId(userId);


    axios.get(`order-details/${userId}`)
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching cart details:', error);
      });
  }, [id]);




  if (redirect) {
    // Use Navigate component for redirection
    return <Navigate to={'/login'} />;
  }

  

  return (
    <div>
            <section className="main-area">
      <div className="container">
        <section id="cart-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <div className="carts table-responsive">
              <div className="cart-header">
                      <h2>
                        Customer Order
                      </h2>
                </div>
                <div className="cart-body">
                <table key={products.length} className="table table-bordered text-center">
            <thead>
              <tr>
                <th>SN</th>
                <th>Code</th>
                <th>Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Quantity</th>
                <th>Shipping Cost</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Address</th>

              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.code}</td>
                  <td>{product.date}</td>
                  <td>{product.name}</td>
                  <td>{product.phone}</td>
                  <td>{product.quantity}</td>
                  <td>{product.shipping_cost}</td>
                  <td>{product.grand_total}</td>
                  <td><span className='btn btn-primary'>{product.payment_status}</span></td>
                  <td>{product.address}</td>

                </tr>
              ))}
            </tbody>
                </table>
                </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    </div>

  );
};

export default Order;
