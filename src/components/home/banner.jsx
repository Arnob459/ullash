import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [brands, setBrands] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [banners, setBanners] = useState([]);
  const [todays, setTodays] = useState([]);
  const [fts, setFts] = useState([]);

  useEffect(() => {
    axios.get('brand/show/api')
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('api-banners')
      .then(response => {
        setSliders(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('api-todaysdeal')
      .then(response => {
        setTodays(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('api-featured')
      .then(response => {
        setFts(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('api-homebanners')
      .then(response => {
        setBanners(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsdesk = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsbanner = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderBrands = () => {
    return brands.map(brand => (
      <div key={brand.id} className="brand-item">
        <Link to={`/brand/product/${brand.id}`} title={brand.name}>
          <div className="brand-image" style={{ backgroundImage: `url(https://vendor.shoppinghobe.com/uploads/users/${brand.avatar})` }} />
          <p>{brand.name}</p>
        </Link>
      </div>
    ));
  };



  const alltodays = todays.map(today => (
    <div key={today.id} >
      <Link className="d-block flash-deal-item" to={`/product/${today.id}`} >
        <div className="row">
          <div className="col-md-6">
            <span className="price text-center">
              <h6>৳{today.after_discount} </h6>
            </span>
            <del className="d-block text-center">
              <h6>৳{today.unit_price}</h6>
            </del>
          </div>
          <div className="col-md-6">
            <div className="img">
              <img
                className="lazyload img-fit"
                data-src=""
                style={{ maxWidth: '60%' }}
                src={`https://vendor.shoppinghobe.com/uploads/product/${today.photos}`}
              />
            </div>
          </div>
        </div>
      </Link>
      <br />
    </div>
  ));

  const allfts = fts.map(ft => (
    <div key={ft.id} >
      <Link className="d-block flash-deal-item" to={`/product/${ft.id}`} >
        <div className="row">
          <div className="col-md-6">
            <span className="price text-center">
              <h6>৳{ft.after_discount} </h6>
            </span>
            <del className="d-block text-center">
              <h6>৳{ft.unit_price}</h6>
            </del>
          </div>
          <div className="col-md-6">
            <div className="img">
              <img
                className="lazyload img-fit"
                data-src=""
                style={{ maxWidth: '60%' }}
                src={`https://vendor.shoppinghobe.com/uploads/product/${ft.photos}`}
              />
            </div>
          </div>
        </div>
      </Link>
      <br />
    </div>
  ));

  const allsliders = sliders.map((slider, idx) => (
    <div key={idx} className={`item ${idx === 0 ? 'active' : ''}`}>
      <img
        alt="..."
        className=" slider_image"
        src={`https://vendor.shoppinghobe.com/public/uploads/slider/${slider.slider}`}
      />
    </div>
  ));

  const allbanners = banners.map((banner, idx) => (
    <div key={idx} className="offer-box">
      <a href={banner.url}>
        <img
          alt=""
          src={`https://vendor.shoppinghobe.com/public/uploads/homebanner/${banner.banner}`}
        />
      </a>
    </div>
  ));

  return (
    <div>
      <section className="slider-area " style={{ marginBottom: '20px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <div className="flash-deal-box bg-white h-100">
                <div className="title text-center p-2 ctry-bg">
                  <h3 className="heading-6 mb-0">
                    Todays Deal
                    <span className="badge bg-danger">
                      Hot
                    </span>
                  </h3>
                </div>
                <div className="flash-content c-scrollbar c-height" style={{ backgroundColor: '#fff' }}>
                  {alltodays}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-8 col-md-100 col-xs-12">
              <div className="carousel slide " data-ride="carousel" id="carousel-example-generic">
                <ol className="carousel-indicators">
                  <li className="active" data-slide-to="0" data-target="#carousel-example-generic" />
                  <li className="" data-slide-to="1" data-target="#carousel-example-generic" />
                  <li className="" data-slide-to="2" data-target="#carousel-example-generic" />
                </ol>
                <div className="carousel-inner" role="listbox">
                  {allsliders}
                </div>
              </div>
            </div> */}

          <div className="col-lg-8 col-md-100 col-xs-12">


          <Slider {...settingsbanner}>
                  {allsliders}
          </Slider>

            </div>

            <div className="col-lg-2 d-none d-lg-block">
              <div className="flash-deal-box bg-white h-100">
                <div className="title text-center p-2 ctry-bg">
                  <h3 className="heading-6 mb-0">Feature items</h3>
                </div>
                <div className="flash-content c-scrollbar c-height" style={{ backgroundColor: '#fff' }}>
                  {allfts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-category-area">
        <div className="container-fluid" style={{ marginBottom: '20px' }}>
          <Slider {...settings}>
            {renderBrands()}
          </Slider>
        </div>
      </section>

      <section className="desktop-category-area">
        <div className="container-fluid" >
          <Slider {...settingsdesk}>
            {renderBrands()}
          </Slider>
        </div>
      </section>

      <section className="three-offer-box">
        <div className="container">
          <div className="row">
            {allbanners}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
