// ProductList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const ProductList = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`search-categories/${categoryId}`)
    .then((response) => {
      setCategory(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get(`api-categories/${categoryId}`)
      .then((response) => {
        setProducts(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  const allProducts = products.map((product, idx) => (
    <div key={product.id} className="item-box">
      <div className="image-box">
        <Link className="nav-b -mhs" to={`/product/${product.id}`}>
          <img
            alt=""
            src={`http://127.0.0.1:8000/uploads/product/${product.photos}`}
          />
        </Link>
      </div>
      <div className="item-content">
        <h5>
        <Link to={`/product/${product.id}`}>
            {product.name}
        </Link>
        </h5>
        <p>
          <span className="sale_price">
            ৳{product.after_discount}
          </span>
          <span className="previous_price">
            ৳{product.unit_price}
          </span>
        </p>
        <Link to={`/product/${product.id}`}>
          <button className="shop-now-btn">
            <i className="fa fa-shopping-cart" />
            shop now
          </button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="heading_title">
          <h4>
          {category.name}
          </h4>
        </div>
        {allProducts}
      </div>
    </div>
  );
};

export default ProductList;
