import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [featureds, setFeatureds] = useState([]);

  useEffect(() => {
    axios.get('api-featured')
      .then((response) => {
        setFeatureds(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allFeatureds = featureds.map((ft, idx) => (
    <div className="item-box" key={idx}>
      <div className="image-box">
      <Link className="nav-b -mhs" to={`/product/${ft.id}`}>
          <img
            alt=""
            src={`https://vendor.shoppinghobe.com/uploads/product/${ft.photos}`}
          />
        </Link>
      </div>
      <div className="item-content">
        <h5>
        <Link  to={`/product/${ft.id}`}>
            {ft.name}
            </Link>
        </h5>
        <p>
          <span className="sale_price">
            ৳{ft.after_discount}
          </span>
          <span className="previous_price">
            ৳{ft.unit_price}
          </span>
        </p>
        <Link to={`/product/${ft.id}`}>
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
            featured products
          </h4>
        </div>
        {allFeatureds}
      </div>
    </div>
  );
};

export default Featured;
