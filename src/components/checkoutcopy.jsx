import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import axios from 'axios';


const Checkout = () => {

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


    axios.get(`cart-product-sum/${userId}`)
      .then(response => {
        setProducts(response.data.products);
        console.log(response.data.products);
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
                <div className="col-lg-6">
                  <div className="carts table-responsive">
                    <div className="cart-header">
                      <h2>
                        Shipping Address
                      </h2>
                    </div>
                    <div className="cart-body">
                    <form action="">
                    <div className="form-group">
                            <label htmlFor="">
                            Shipping Address
                            </label>
                            <input  
                            className="form-control"
                            defaultValue=""
                            name="address"
                            placeholder="Your Present Address"
                            type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                            Phone Number
                            </label>
                            <input  
                            className="form-control"
                            
                            name="phone"
                            placeholder="Mobile Number"
                            type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                            Shipping Area
                            </label>
                            <select className="form-control"   id="shipping_type" name="shipping_type"
                                >
                                  <option value="0">
                                    Select Shipping Area
                                  </option>
                                  <option value="1">
                                    Inside Dhaka City
                                  </option>
                                  <option value="2">
                                    Outside Dhaka
                                  </option>
                                </select>
                        </div>

                        <table className="table table-bordered text-center">
                          <tbody>

                            <tr>
                              <th>
                                Product Price
                              </th>
                              <td>
                                <input
                                className="form-control"
                                  id="subtotal_amount" defaultValue= {products}
                                  type="text" readOnly
                                />
                              </td>
                            </tr>
                            <tr>

                            </tr>
                            <tr>
                              <th>
                                Total
                              </th>
                              <td>
                                <input
                                  className="form-control"
                                  id="show_cost"
                                  type="text" readOnly
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="form-group col-6 ">
                            <form action="">
                            <label htmlFor="">
                            Enter Coupon Code
                            </label>
                            <input  
                            className="form-control"
                            defaultValue=""
                            name="address"
                            placeholder="Apply if you have any coupon code..."
                            type="text"
                            />

                            </form>

                        </div>
                        <div className="form-group col-6 ">
                        <button className="btn btn-sm btn-primary float-start" type="submit">
                            Apply
                        </button>

                        </div>

                        <div className="form-group mt-3">
                            <button
                            className="btn btn-sm btn-warning btn-block w-100"
                            type="submit"
                            >
                            Confirm Order
                            </button>
                        </div>


                        </form>
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

export default Checkout;
