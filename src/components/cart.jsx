import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import axios from 'axios';
import Cartcart from './cartcart';


const Cart = () => {

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


    axios.get(`cart-product/${userId}`)
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching cart details:', error);
      });
  }, [id]);


  const handleDelete = async (productId) => {

      const response = await axios.delete(`cart-delete/${id}/${productId}`);
      console.log(response);
      if (response.data.status == 200) {
        // Update the products state to reflect the changes
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));

        console.log(response.data.status);
      } else {
        console.error('Error deleting from cart:', response.data.message);
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
              <div className="col-lg-12">
              <Cartcart key={products.length} products={products} onDelete={handleDelete} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    </div>

  );
};

export default Cart;
