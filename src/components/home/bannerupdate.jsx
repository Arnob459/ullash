import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class banner extends Component {
    state = {
        brands: [],
        sliders: [],
        banners: [],
        todays: [],
        fts: [],

    }

    componentDidMount(){
        axios.get('brand/show/api')
        .then((response) => {

          this.setState({brands:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

        axios.get('api-banners')
        .then((response) => {

          this.setState({sliders:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

        axios.get('api-todaysdeal')
        .then((response) => {

          this.setState({todays:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

        axios.get('api-featured')
        .then((response) => {

          this.setState({fts:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

        axios.get('api-homebanners')
        .then((response) => {

          this.setState({banners:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });


    }

    renderBrands() {
        return this.state.brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <Link to={`/brand/product/${brand.id}`} title={brand.name}>

            <div className="brand-image" style={{ backgroundImage: `url(http://127.0.0.1:8000/uploads/users/${brand.avatar})` }} />
            <p>{brand.name}</p>
            </Link>
          </div>
        ));
      }
    



  render() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
    // const brands = this.state.brands;
 
    // const allbrands = brands.map((brand,idx)=>{
    //     return (

    //         <div className="mobile-category-item">
    //         <a
    //             href=""
    //             title={brand.name}
    //         >
    //             <img
    //             src={`http://127.0.0.1:8000/uploads/users/${brand.avatar}`}
    //             alt={brand.name}
    //             title={brand.name}
    //         />
    //         </a>
    //         <p>
    //             <a href="">
    //             {brand.name}
    //             </a>
    //         </p>
    //         </div>


    //     ) 
    // });

    const todays = this.state.todays;
    const alltodays = todays.map((today,idx)=>{
        return (

            <div key={today.id}  >
                <Link className="d-block flash-deal-item" to={`/product/${today.id}`} >
                    <div className="row ">
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
                            src={`http://127.0.0.1:8000/uploads/product/${today.photos}`}
                        />
                        </div>
                    </div>

                    </div>
                    </Link>
                        <br />
            </div>


        ) 
    });

    const fts = this.state.fts;
    const allfts = fts.map((ft,idx)=>{
        return (

            <div key={ft.id} >
                <Link className="d-block flash-deal-item" to={`/product/${ft.id}`} >
                    <div className="row ">
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
                            src={`http://127.0.0.1:8000/uploads/product/${ft.photos}`}
                        />
                        </div>
                    </div>

                    </div>
                    </Link>
                        <br />
            </div>


        ) 
    });


    const sliders = this.state.sliders;
    const allsliders = sliders.map((sliders,idx)=>{
        return (

            <div  key={idx} className={`item ${idx === 0 ? 'active' : ''}`}>
            <img
                alt="..."
                className=" slider_image"
                src={`http://127.0.0.1:8000/public/uploads/slider/${sliders.slider}`}
            />
            </div>

        ) 
    });

    const banners = this.state.banners;
    const allbanners = banners.map((banners,idx)=>{
        return (

            <div className="offer-box">
                <a href={banners.url}>
                <img
                    alt=""
                    src={`http://127.0.0.1:8000/public/uploads/homebanner/${banners.banner}`}
                />
                </a>
            </div>


        ) 
    });



    return (
      <div>



        <section className="slider-area "  style={{ marginBottom: '20px' }} >
            <div className="container-fluid">
                <div className="row">
                    {/* todaysdeal */}
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
                        <div
                        className="flash-content c-scrollbar c-height"
                        style={{
                            backgroundColor: '#fff'
                        }}
                        >

                            {alltodays}

                        </div>
                    </div>
                </div>
                        {/* slider */}
                <div className="col-lg-8 col-md-100 col-xs-12">
                    <div
                    className="carousel slide "
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

                        {allsliders}

                    </div>
                    </div>
                </div>

                {/* feature */}
                <div className="col-lg-2 d-none d-lg-block">
                    <div className="flash-deal-box bg-white h-100">
                        <div className="title text-center p-2 ctry-bg">
                        <h3 className="heading-6 mb-0">
                                Feature items

                        </h3>
                        </div>
                        <div
                        className="flash-content c-scrollbar c-height"
                        style={{
                            backgroundColor: '#fff'
                        }}
                        >

                            {allfts}

                        </div>
                    </div>
                </div>
                {' '}
                </div>
            </div>
        </section>

        <section className="mobile-category-area">
            <div className="container-fluid " style={{ marginBottom: '20px' }}>
            <Slider {...settings}>
          {this.renderBrands()}
        </Slider>
            </div>
        </section>

        <section className="desktop-category-area">
            <div className="container-fluid " >
            <Slider {...settingsdesk}>
          {this.renderBrands()}
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
    )
  }
}

export default banner