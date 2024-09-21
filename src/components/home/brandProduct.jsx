// BrandProduct.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BrandProduct = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`brand/api/${brandId}`)
      .then((response) => {
        setBrand(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`brand/show/api/${brandId}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [brandId]);

  const allProducts = products.map((product, idx) => (
    <div key={product.id} className="item-box">
      <div className="image-box">
        <Link className="nav-b -mhs" to={`/product/${product.id}`}>
          <img
            alt=""
            src={`https://vendor.shoppinghobe.com/uploads/product/${product.photos}`}
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
          <h4>{brand.name}</h4>
        </div>
        {allProducts}
      </div>
    </div>
  );
};

export default BrandProduct;
