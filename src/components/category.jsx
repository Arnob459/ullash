import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('api-categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allCategoriesMob = categories.map((category, idx) => (
    <div className="mobile-category-item" key={idx}>
      <a
        href=""
        title={category.name}
      >
        <img src={`http://127.0.0.1:8000/uploads/category/${category.icon}`} alt={category.name} />
      </a>
      <p>
        <a href="">
          {category.name}
        </a>
      </p>
    </div>
  ));

  return (
    <section className="main-area">
      <div className="container">
        <section className="mobile-category-area">
          <div className="container-fluid">
            <div className="row">
              <div className="aponss">
                {allCategoriesMob}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Category;
