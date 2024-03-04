import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Best = () => {
  const [bestsellings, setBestsellings] = useState([]);

  useEffect(() => {
    axios.get('api-bestselling')
      .then((response) => {
        setBestsellings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allBestsellings = bestsellings.map((best, idx) => (
    <div key={best.id} className="item-box">
      <div className="image-box">
        <Link className="nav-b -mhs" to={`/product/${best.id}`}>
          <img
            alt=""
            src={`http://127.0.0.1:8000/uploads/product/${best.photos}`}
          />
        </Link>
      </div>
      <div className="item-content">
        <h5>
        <Link  to={`/product/${best.id}`}>
            {best.name}
        </Link>
        </h5>
        <p>
          <span className="sale_price">
            ৳{best.after_discount}
          </span>
          <span className="previous_price">
            ৳{best.unit_price}
          </span>
        </p>
        <Link to={`/product/${best.id}`}>
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
            best selling products
          </h4>
        </div>
        {allBestsellings}
      </div>
    </div>
  );
};

export default Best;
