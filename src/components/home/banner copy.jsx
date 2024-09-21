import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import axios from 'axios';

export class banner extends Component {
    state = {
        brands: [],
        sliders: [],
        banners: [],


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

        axios.get('api-homebanners')
        .then((response) => {

          this.setState({banners:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

  render() {
    const brands = this.state.brands;
    const allbrands = brands.map((brand,idx)=>{
        return (

            <div className="mobile-category-item">
            <a
                href=""
                title={brand.name}
            >
                <img
                src={`https://vendor.shoppinghobe.com/uploads/users/${brand.avatar}`}
                alt={brand.name}
                title={brand.name}
            />
            </a>
            <p>
                <a href="">
                {brand.name}
                </a>
            </p>
            </div>


        ) 
    });


    const sliders = this.state.sliders;
    const allsliders = sliders.map((sliders,idx)=>{
        return (

            <div  key={idx} className={`item ${idx === 0 ? 'active' : ''}`}>
            <img
                alt="..."
                className="slider_image"
                src={`https://vendor.shoppinghobe.com/public/uploads/slider/${sliders.slider}`}
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
                    src={`https://vendor.shoppinghobe.com/public/uploads/homebanner/${banners.banner}`}
                />
                </a>
            </div>


        ) 
    });



    return (
      <div>

        <section className="slider-area">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-100 col-xs-12">
                    <div
                    className="carousel slide"
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
                {' '}
                </div>
            </div>
        </section>

        <section className="mobile-category-area">
            <div className="container-fluid">
                <div className="row">
                <div className="cards">

                    {allbrands}

                </div>
                </div>
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