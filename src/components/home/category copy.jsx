// Category.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios
      .get('api-categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allcategoriesmob = categories.map((category) => (
    <div key={category.id} className="mobile-category-item">
      <Link to={`/category/product/${category.id}`} title={category.name}>
        <img
          src={`https://vendor.shoppinghobe.com/uploads/category/${category.icon}`}
          alt={category.name}
          title={category.name}
        />
      </Link>
      <p>
        <Link to={`/category/products/${category.id}`}>{category.name}</Link>
      </p>
    </div>
  ));

  const allCategories = categories.map((category) => (
    <div key={category.id} className="category-item"                     style={{
        padding: '5px 13px',
        width: 'auto!important'
        }}>
      <Link to={`/category/product/${category.id}`} title={category.name}>
        <img
          src={`https://vendor.shoppinghobe.com/uploads/category/${category.icon}`}
          alt={category.name}
          title={category.name}
        />
      </Link>
      <p>
        <Link to={`/category/product/${category.id}`}>{category.name}</Link>
      </p>
    </div>
  ));

  return (
    <div>
      <section className="mobile-category-area">
        <div className="container-fluid">
          <div className="row">
            <div className="cards">{allcategoriesmob}</div>
          </div>
        </div>
      </section>
      {/* <section className="desktop-category-area">
            <div className="container-fluid">
                <div className="row">

            {allCategories}
               
                </div>
            </div>
        </section> */}

              <section className="desktop-category-area">
              <div className="container-fluid">
                    <div
                    className="slick-carousel "
                    data-ride="carousel"
                    id="carousel-example-generic"
                    >
                    <ol className="carousel-indicators">
                        <li
                        className="active"
                        data-slide-to="0"
                        data-target="#carousel-example-generic"
                        />
                        <li
                        className=""
                        data-slide-to="1"
                        data-target="#carousel-example-generic"
                        />
                        <li
                        className=""
                        data-slide-to="2"
                        data-target="#carousel-example-generic"
                        />

                    </ol>
                    <div
                        className="carousel-inner"
                        role="listbox"
                    >

                        {allCategories}

                    </div>
                    </div>
                </div>

        </section>


    </div>
  );
};

export default Category;
