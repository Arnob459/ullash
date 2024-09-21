import React from 'react';
import {  Link } from 'react-router-dom';

const cartcart = ({ products, onDelete }) => {
  return (
    <div className="carts table-responsive">
      <div className="cart-header">
        <h2>Customer Cart</h2>
      </div>
      <div className="cart-body">
        {products.length === 0 ? (
                    <div className="empty-cart-message">
                    <h2>No cart items added.</h2>
                  </div>
        ) : (
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>SN</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Size</th>
                <th>waist</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      alt=""
                      height="50px"
                      src={`https://vendor.shoppinghobe.com/uploads/product/${product.image}`}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.size || 'Adjustable'}</td>
                  <td>{product.w_size}</td>
                  <td>{product.color}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.total_price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      type="button"
                      onClick={() => onDelete(product.id)}
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {products.length > 0 && (
          <div className="cart-btn-area">
            <Link to="/checkout" className="btn btn-primary float-start" id="normal_cart" type="button">
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default cartcart;
