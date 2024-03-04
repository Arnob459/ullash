import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import axios from 'axios';

export class best extends Component {
    state = {
        bestsellings: [],
    }

    componentDidMount(){
        axios.get('api-bestselling')
        .then((response) => {

          this.setState({bestsellings:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

  render() {
            const bestsellings = this.state.bestsellings;
            const allbestsellings = bestsellings.map((best,idx)=>{
                return (

                    <div key={best.id} className="item-box ">
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
                        <a href="">
                        {best.name}
                        </a>
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


                ) 
            });

    return (
        <div className="container ">

        <div className="row">
            <div className="heading_title">
                    <h4>
                    best selling products
                    </h4>
            </div>

            {allbestsellings}

        </div>
    </div>
    )
  }
}

export default best