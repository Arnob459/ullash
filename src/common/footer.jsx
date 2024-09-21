import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class footer extends Component {
  render() {
    return (
                <div>
            <footer id="footer">
        <section className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-md-55 col-xs-12">
                <div className="footer-widget">
                  <h3 className="block-title">
                    Address
                  </h3>
                  <div className="textwidget">
                    <p />
                    <div className="address">
                      <label>
                        <i
                          aria-hidden="true"
                          className="fa fa-map-marker"
                        />
                      </label>
                      <span>
                        Gulshan-2, Dhaka-1212, Bangladesh
                      </span>
                    </div>
                    <div className="phone">
                      <label>
                        <i
                          aria-hidden="true"
                          className="fa fa-phone"
                        />
                      </label>
                      <span>
                        09613000789
                      </span>
                    </div>
                    <div className="email">
                      <label>
                        <i className="fa fa-envelope" />
                      </label>
                      <a href="mailto:info@ullasshop.com">
                        info@ullasshop.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-55 col-sm-12 col-xs-12">
                <div className="footer-widget">
                  <h3 className="block-title">
                    About
                  </h3>
                  <ul className="menu">
                    <li>
                      < Link to='/about' >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a href="">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Wholesale
                      </a>
                    </li>
                    <li>
                      <Link to='/contact'>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-55 col-sm-12 col-xs-12">
                <div className="footer-widget">
                  <h3 className="block-title">
                    Helpful Link
                  </h3>
                  <ul className="menu">
                    <li>
                      <a href="">
                        Official Stores
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Flash Sale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-55 col-sm-12 col-xs-12">
                <div className="footer-widget">
                  <h3 className="block-title">
                    Policy
                  </h3>
                  <ul className="menu">
                    <li>
                      <Link to='/policy'  >
                        Privacy & Policy
                      </Link>
                    </li>
                    <li>
                      <Link to='/sellerpolicy' >
                        Seller Policy
                      </Link>
                    </li>
                    <li>
                      <Link to='/brandpolicy' >
                        Brand Policy
                      </Link>
                    </li>
                    <li>
                      <Link to='/refund'>
                        Return & Refund Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-55 col-sm-12 col-xs-12">
                <div className="footer-widget">
                  <h3 className="block-title">
                    Important Link
                  </h3>
                  <ul className="menu">
                    <li>
                      <Link to='/category'>
                        Categories
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://vendor.shoppinghobe.com/brand/register"
                        title=""
                      >
                        Seller Registration
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://vendor.shoppinghobe.com/login"
                        title=""
                      >
                        Seller Login
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        title=""
                      >
                        Campaign
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-block services-block-footer d-none">
          <h6 className="sr-only">
            Services List
          </h6>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 d-flex">
                <div className="item d-flex align-items-center">
                  <div className="icon">
                    <i className="icofont fa fa-cloud text-primary" />
                  </div>
                  <div className="text">
                    <span className="text-uppercase">
                      Free shipping & return
                    </span>
                    <small>
                      Free Shipping over $300
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-flex">
                <div className="item d-flex align-items-center">
                  <div className="icon">
                    <i className="icofont fa fa-credit-card text-primary" />
                  </div>
                  <div className="text">
                    <span className="text-uppercase">
                      Money back guarantee
                    </span>
                    <small>
                      7 Days Money Back
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-flex">
                <div className="item d-flex align-items-center">
                  <div className="icon">
                    <i className="icofont fa fa-phone text-primary" />
                  </div>
                  <div className="text">
                    <span className="text-uppercase">
                      09613000345
                    </span>
                    <small>
                      24/7 Available Support
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-flex">
                <div className="item d-flex align-items-center">
                  <div className="icon">
                    <i className="icofont fa fa-shopping-bag text-primary" />
                  </div>
                  <div className="text">
                    <span className="text-uppercase">
                      Secure Payment
                    </span>
                    <small>
                      Secure Payment
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </footer>
    <style
    dangerouslySetInnerHTML={{
      __html: '         #footer {z-index: 9999999999;}         /* Footer */         .footer-app a {         float: left;         width: 50%;         padding: 0 10px;         }         .footer-Content {         background: #232f3e;         margin: 0;         padding: 4rem 0;         }         .footer-widget .block-title {         color: #ffffff;         font-size: 16px;         font-weight: 600;         margin: 0 0 25px;         position: relative;         text-transform: uppercase;         }         .footer-widget .block-title::after {         background: #4a3eed;         background: -moz-linear-gradient(left, #4a3eed 0%, #9d1fff 100%);         background: -webkit-linear-gradient(left, #4a3eed 0%, #9d1fff 100%);         background: linear-gradient(to right, #4a3eed 0%, #9d1fff 100%);         filter: progid: DXImageTransform.Microsoft.gradient( startColorstr=\'#4a3eed\', endColorstr=\'#9d1fff\', GradientType=1);         border-radius: 12px;         content: "";         height: 3px;         left: 0;         position: absolute;         top: 30px;         width: 40px;         }         .footer-widget .menu li {         line-height: 28px;         }         .footer-widget .menu span {         font-weight: bold;         margin: 0 4px 0 0;         }         .footer-widget .menu li a {         color: rgba(255, 255, 255, 0.97);         padding: 8px 0px;         }         .footer-widget .menu a::before {         color: rgba(255, 255, 255, 0.97);         content: "\f105";         font-family: fontawesome;         padding: 0 7px 0 0;         }         .footer-widget .menu a:hover::before {         color: rgba(255, 255, 255, 0.97);         }         .footer-Content a:hover:before {         color: #fff !important;         margin-right: 5px;         transition: 0.1s padding ease-out, 0.1s margin ease-out, 0.1s border ease-out;         }         .footer-bottom h6 {         display: inline;         vertical-align: sub;         }         .footer p {         margin: 0;         padding: 0;         color: rgba(255, 255, 255, 0.97);         }         .footer-Content p {         line-height: 30px;         }         .footer {         background-color: #131A22;         padding: 10px 0;         z-index: 999999;         display: block;         }         .footer-logo {         min-width: 100px;         padding: 0px 40px 0 0;         }         .footer-links > ul {         margin: -5px 0 0 0;         padding: 0;         }         .footer-links > ul li {         display: inline;         margin: 0;         padding: 0;         }         .footer-links li a {         padding: 0 15px 0 0;         font-weight: 500;         color: #ffffff;         }         .copyright p {         color: #ffffff;         font-size: 11px;         margin: 0;         opacity: 0.8;         }         .copyright a {         color: #ffffff;         }         .social-icon a i {         border-radius: 50px;         background: #ffffff none repeat scroll 0 0;         box-shadow: 0 0 8px 0 rgba(77, 73, 112, 0.12);         display: inline-block;         font-size: 16px;         height: 34px;         line-height: 34px;         margin: 0 0 0 1px;         box-shadow: 0 2px 5px 0 rgba(77, 73, 112, 0.12);         text-align: center;         width: 34px;         color: #343a40;         }         .social-icon a i:hover {         box-shadow: 0 0 9px 0 rgba(77, 73, 112, 0.12);         background: #4a3eed none repeat scroll 0 0;         color:#fff;         }         .footer-bottom {         background: #ffffff none repeat scroll 0 0;         overflow: hidden;         padding: 30px 0;         width: 100%;         }         .footer-bottom img {         background: #231f20 none repeat scroll 0 0;         border-radius: 3px;         height: 38px;         object-fit: scale-down;         padding: 3px 4px;         }         .footer-bottom .payment-menthod img {         background: #fff none repeat scroll 0 0;         height: auto;         padding: 0;         }         .footer-bottom strong {         font-stretch: normal;         font-style: normal;         }         .footer-bottom .payment-menthod {         margin: 0;         }         .footer-bottom .payment-menthod a i {         color: #cccccc;         font-size: 56px;         line-height: 45px;         vertical-align: top;         }         .footer a:hover {         color: #eee !important;         }         .copyright .fa-heart {         animation: 2.5s ease 0s normal none infinite running animateHeart;         color: #e92424;         margin: 0 2px;         }         .services-block-footer .item {         border: medium;         border-radius: 2px;         padding: 33px 0;         }         .services-block i {         font-size: 41px;         margin-right: 10px;         }         .icofont {         font-family: fontawesome;         speak: none;         font-style: normal;         font-weight: 400;         font-variant: normal;         text-transform: none;         line-height: 1;         -webkit-font-smoothing: antialiased;         -moz-osx-font-smoothing: grayscale;         color: #232f3e!important;         float: left;         }         .services-block small {         color: #555;         display: block;         font-size: 12px;         font-weight: 500;         }         .address,         .phone,          .email,         .email a {         color: white;         }         .services-block span {         color: #232f3e;         display: block;         font-size: 16px;         font-weight: 600;         line-height: 15px;         }         @keyframes    animateHeart {         0% {         transform: scale(1);         }         5% {         transform: scale(1.2);         }         10% {         transform: scale(1.1);         }         15% {         transform: scale(1.25);         }         50% {         transform: scale(1);         }         100% {         transform: scale(1);         }         }         /* End Footer */         @media    screen and (max-width: 768px) {         .d-none {         display: none!important;         ;         }         .social-icon {         text-align: center;         padding-top: 15px;         }         .footer-bottom {         padding-top: 0;         }         }         .col-xs-15, .col-sm-15, .col-md-15, .col-lg-15 {         position: relative;         min-height: 1px;         padding-right: 10px;         padding-left: 10px;         }         .col-xs-15 {         width: 20%;         float: left;         }         @media (min-width:320px) and (max-width:575px){             .copyright p{                 text-align:center!important;             }             .copyright p a{                 color:#08b6ae!important;             }         }         @media (min-width: 768px) {         .col-sm-15 {         width: 50%;         float: left;         }         }         @media (min-width: 992px) {         .col-md-15 {         width: 33%;         float: left;         }         }         @media (min-width: 1200px) {         .col-lg-15 {         width: 20%;         float: left;         }         }      '
    }}
   />

      </div>

        


    )
  }
}

export default footer