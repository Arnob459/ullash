import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
  };
  const settingsmob = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
  };

  const renderCategorySlides = () => {
    return categories.map((category) => (
      <div key={category.id} className="category-item">
      <Link to={`/category/product/${category.id}`} title={category.name}>
        <img
          src={`https://vendor.shoppinghobe.com/uploads/category/${category.icon}`}
          alt={category.name}
          title={category.name}
        />
      </Link>
        <p>
          {category.name}
        </p>
      </div>
    ));
  };



  return (
    <div>
      <section className="desktop-category-area">
        <div className="container-fluid">
          <Slider {...settings}>
            {renderCategorySlides()}
          </Slider>
        </div>
      </section>
      <section className="mobile-category-area">
        <div className="container-fluid">
        <Slider {...settingsmob}>
            {renderCategorySlides()}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Category;
