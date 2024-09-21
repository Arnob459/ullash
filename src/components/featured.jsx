import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import axios from 'axios';

export class featured extends Component {
    state = {
        featureds: [],
    }

    componentDidMount(){
        axios.get('api-featured')
        .then((response) => {

          this.setState({featureds:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  render() {
    const featureds = this.state.featureds;
    const allfeatureds = featureds.map((ft,idx)=>{
        return (

            <div className="item-box ">
            <div className="image-box">
            <a href="">
                <img
                alt=""
                src={`https://vendor.shoppinghobe.com/uploads/product/${ft.photos}`}
                style={{ height: '2px' }}
                />
            </a>
            </div>
            <div className="item-content">
            <h5>
                <a href="">
                {ft.name}
                </a>
            </h5>
            <p>
                <span className="sale_price">
                ৳{ft.after_discount}
                </span>
                <span className="previous_price">
                ৳{ft.unit_price}
                </span>
            </p>
            <button className="shop-now-btn">
                <a href="">
                <i className="fa fa-shopping-cart" />
                shop now
                </a>
            </button>

            </div>
        </div>


        ) 
    });
    return (
        <div className="container ">
            <div className="row">
                <div className="heading_title">
                    <h4>
                    featured products
                    </h4>
                </div>
                    {allfeatureds}

            </div>
        </div>

    )
  }
}

export default featured