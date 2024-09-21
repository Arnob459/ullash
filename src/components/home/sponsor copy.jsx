import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import axios from 'axios';

export class sponsor extends Component {
  state = {
    banners: [],

}

componentDidMount(){


    axios.get('api-homebanner-single')
    .then((response) => {

      this.setState({banners:response.data});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

}

  render() {

    const banners = this.state.banners;


    return (
      <section className="sponsored1-area">
          <div className="container">
              <div className="row">
              <a href={banners.url}>
                  <img
                  alt=""
                  src={`https://vendor.shoppinghobe.com/public/uploads/slider/${banners.slider}`}
                  style={{
                      borderRadius: '0',
                      height: 'auto!important'
                  }}
                  />
              </a>
              <a>
              </a>
              </div>
              <a>
              </a>
          </div>

    </section>

    )
  }
}

export default sponsor