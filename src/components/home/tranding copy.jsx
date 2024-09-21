import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import axios from 'axios';

export class tranding extends Component {
    state = {
        trandings: [],
    }

    componentDidMount(){
        axios.get('api-trending')
        .then((response) => {

          this.setState({trandings:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  render() {
    const trandings = this.state.trandings;
    const alltrandings = trandings.map((tr,idx)=>{
        return (

            <div className="item-box ">
            <div className="image-box">
            <a href="">
                <img
                alt=""
                src={`https://vendor.shoppinghobe.com/uploads/product/${tr.photos}`}
                
                />
            </a>
            </div>
            <div className="item-content">
            <h5>
                <a href="">
                {tr.name}
                </a>
            </h5>
            <p>
                <span className="sale_price">
                ৳{tr.after_discount}
                </span>
                <span className="previous_price">
                ৳{tr.unit_price}
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
                trending products
            </h4>
            </div>
                {alltrandings}

            </div>
        </div>
    )
  }
}

export default tranding