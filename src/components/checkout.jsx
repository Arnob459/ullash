import React, { useEffect, useState } from 'react';
import { useNavigate , Navigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {

  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

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

            const applyCoupon = async (event) => {
              event.preventDefault();

              const couponCode = document.getElementById('coupon').value;

              try {
                const response = await axios.post('api-coupon-code', {
                  coupon: couponCode,
                });

                if (response.data.status === 200) {
                  toast.success(response.data.message, { autoClose: 3000 });
                  // Update the discount amount
                  document.getElementById('discount_amount').value = response.data.discount;
                  setCouponCode(couponCode);
                  // Recalculate the total
                  calculateTotal();
                  toast.success('Coupon added successfully!', { autoClose: 3000 });

                } else {
                  toast.error(response.data.massage);
                }
              } catch (error) {
                console.error('Error applying coupon:', error);
              }
            };

  const calculateTotal = () => {
    const productPrice = parseFloat(document.getElementById('subtotal_amount').value) || 0;
    const discountAmount = parseFloat(document.getElementById('discount_amount').value) || 0;

    const total = productPrice - discountAmount;
    document.getElementById('show_cost').value = total.toFixed(2);
  };

  const confirmOrder = async (event) => {
    event.preventDefault();

    // Fetch data from form elements using their IDs
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const shippingType = document.getElementById('shipping_type').value;

    // You may need to update the following line based on your API requirements
    const orderData = {
      user_id: id,
      address,
      phone,
      shipping_type: shippingType,
      coupon_code: couponCode,
      // Include other necessary data for the order
    };

    try {
      // Make a POST request to confirm the order
      const response = await axios.post('order-place', orderData);

      if (response.data.status == 200 ) {
        // Handle success, e.g., show a success message
        toast.success('Order confirmed successfully!', { autoClose: 3000 });
        console.log('Order confirmed successfully');
        setTimeout(() => {
          navigate('/order');
        }, 2000); 
      } else {
        toast.error(`Error confirming order: ${response.data.message}`);

        // Handle failure, e.g., show an error message
        console.error('Error confirming order:', response.data.message);
      }
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };




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
                    <form onSubmit={confirmOrder}>
                    <div className="form-group">
                            <label htmlFor="">
                            Shipping Address
                            </label>
                            <input  className="form-control"  id='address' name="address"  placeholder="Your Present Address"  type="text"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone Number </label>
                            <input className="form-control"          
                            name="phone" id='phone' placeholder="Mobile Number" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Shipping Area </label>
                            <select className="form-control"   id="shipping_type" name="shipping_type"
                                >
                                  <option value="0"> Select Shipping Area </option>
                                  <option value="1"> Inside Dhaka City  </option>
                                  <option value="2"> Outside Dhaka </option>
                                </select>
                        </div>

                        <table className="table table-bordered text-center">
                          <tbody>
                            <tr>
                              <th>Product Price</th>
                              <td>
                                <input className="form-control"  id="subtotal_amount" defaultValue= {products}  type="text" readOnly  />
                              </td>
                            </tr>
                            <tr>
                              <th>Discount Price</th>
                              <td>
                                <input className="form-control"  id="discount_amount"   type="text" readOnly  />
                              </td>
                            </tr>
                            <tr>
                              <th> After Discount </th>
                              <td>
                                <input  className="form-control"  id="show_cost"  type="text" readOnly  />
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <form >
                        <div className="form-group col-6 ">
                            <label htmlFor=""> Enter Coupon Code </label>
                            <input  className="form-control" id="coupon"  name="coupon" placeholder="Apply if you have any coupon code..."  type="text" />

                        </div>
                        <div className="form-group col-6 ">
                        <button className="btn btn-sm btn-primary float-start" type="submit" onClick={applyCoupon}>
                            Apply
                        </button>
                        </div>
                        </form>



                        <div className="form-group mt-3">
                            <button  className="btn btn-sm btn-warning btn-block w-100"  type="submit"  >Confirm Order </button>
                        </div>
                        </form>
                        <ToastContainer position="top-right" />
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
