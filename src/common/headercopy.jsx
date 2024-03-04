import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../components/home';
import About from '../components/about';
import Login from '../components/login';
import Register from '../components/register';
import Profile from '../components/profile';
import Categorymob from '../components/category';
import Logo from '../components/logo';
import Product from '../components/product';
import Cart from '../components/cart';



import axios from 'axios';







export class header extends Component {

    state = {
        user: {},
        name:'',
    }

    logout = () =>{
        localStorage.clear();
        this.props.setUser(null);
    }

    componentDidMount(){
        axios.get('api/user') 
        .then( (response) => {
            this.setUser(response.data)
          })
          .catch( (error) => {
            console.log(error);
          });
    }

    setUser=(user)=>{
        this.setState({user:user})
    }
  render() {

    let buttons;
    let dbuttons;
    let mbuttons;


    let profile;
    if (localStorage.getItem('token')) {
        buttons =  (

            <Link className="nav-b -mhs" to="/profile">
            <i aria-hidden="true" className="fa fa-user-o" />
            </Link>  
        )
        mbuttons =  (

            <Link className="bottom-nav-link" to="/" onClick={this.logout}>
            <i className="fa fa-user-circle" />
                <span>
                Logout
                </span>
            </Link> 
        )

        profile =  (
        <div className="btn-group user">
            <Link to="/profile">
            <button   className="btn btn-secondary dropdown-toggle users"  data-display="static"   type="button"  >
                Profile
            </button>
            </Link>
            <Link to="/" onClick={this.logout}>
            <button   className="btn btn-secondary dropdown-toggle users"  data-display="static"   type="button"  >
                Logout
            </button>
            </Link>
        </div>
        )
    }else{
        buttons =  (
            <Link className="nav-b -mhs" to="/login">
            <i aria-hidden="true" className="fa fa-user-o" />
            </Link>                
        )
        mbuttons =  (

            <Link className="bottom-nav-link" to="/login">
            <i className="fa fa-user-circle" />
                <span>
                Login
                </span>
            </Link> 
        )
        dbuttons =  (

            <div className="btn-group user">
            <button aria-expanded="false" aria-haspopup="true" className="btn btn-secondary dropdown-toggle users"  data-display="static"  data-toggle="dropdown" type="button"  >
            Login
            </button>
            <div className="dropdown-menu dropdown-menu-lg-right">
            <p className="dropdown-item signin">
                <a    type="button" >
                <Link to="/login">Sign in</Link>
                </a>
                <a   style={{   marginTop: '5px'  }}   type="button"  >
                <Link to="/register">Sign up</Link>
                </a>
            </p>
            </div>
        </div>
        )

    }

    return (
      <Router>

            <div id="wrapper" user={this.state.user} setUser={this.setUser} >

            <header
                className="typeheader-6 apon-header"
                id="header"
                >
                <div className="topbanner">
                    <div
                    className="top-banner-container"
                    style={{
                        padding: '0'
                    }}
                    >
                    </div>
                </div>
                <nav className="bottom-nav hidden-lg hidden-md">
                    <a
                    className="bottom-nav-item"
                    href=""
                    >
                    <div className="bottom-nav-link">
                        <i className="fa fa-home" />
                        <span>
                        Home
                        </span>
                    </div>
                    </a>
                    <a
                    className="bottom-nav-item"
                    href=""
                    >
                    <div className="bottom-nav-link">
                        <i className="fa fa-bars" />
                        <span>
                        <Link to="/category">Category</Link>
                        </span>
                    </div>
                    </a>
                    <a
                    className="bottom-nav-item"
                    href="https://ullasshop.com/cart/empty"
                    >
                    <div className="bottom-nav-link ">
                        <i
                        className="cartCount"
                        style={{
                            background: '#ff6e26',
                            borderRadius: '12px',
                            color: '#fff',
                            fontSize: '11px',
                            height: '18px',
                            lineHeight: '12px',
                            minWidth: '18px',
                            padding: '3px',
                            position: 'absolute',
                            right: '5px',
                            top: '-5px',
                            zIndex: '1'
                        }}
                        >
                        0
                        </i>
                        <i className="fa fa-cart-plus" />
                        <span>
                        Cart
                        </span>
                    </div>
                    </a>
                    <a
                    className="bottom-nav-item"
                    href=""
                    >
                    <div className="bottom-nav-link">
                        <i className="fa fa-heart" />
                        <span>
                        Wishlist
                        </span>
                    </div>
                    </a>
                    <div className="bottom-nav-item">
                        {mbuttons}
 
                    </div>
                </nav>
                <div
                    className="header-center"
                    id="navbar_top"
                >
                    <div className="container">
                    <div className="row">
                        <div
                        className="navbar-logo col-lg-2 col-md-2 col-sm-12 col-xs-12"
                        style={{
                            maxHeight: '50px',
                            padding: '0'
                        }}
                        >
                        <button
                            className="navbar-toggle"
                            data-toggle="collapse"
                            id="show-verticalmenu"
                            style={{
                            float: 'left',
                            marginLeft: '0'
                            }}
                            type="button"
                        >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <div className="mobile">
                            <Logo />
                            <div className="-df -j-end hidden-lg hidden-md demo">
                            <button
                                className="btn btn-demo nav-b"
                                data-target="#myModal2"
                                data-toggle="modal"
                                type="button"
                            >
                                <i
                                aria-hidden="true"
                                className="fa fa-search"
                                />
                            </button>
                                {buttons}
                            <div
                                className="cart"
                                id="cart"
                            >
                                <a
                                className="-df -i-ctr -gy8 -hov-or5 -phs -fs16"
                                href="https://ullasshop.com/cart/empty"
                                >
                                <span
                                    className="-mrs -fs0"
                                    data-bdg="0"
                                >
                                    <img
                                    alt="shopping-cart"
                                    height="25"
                                    src="https://ullasshop.com/public/upload/images/shopping-cart.png"
                                    title="shopping-cart"
                                    width="25"
                                    />
                                    <p className="cartCount">
                                    0
                                    </p>
                                </span>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="header-center-right col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="header_search">
                            <div
                            className="sosearchpro-wrapper so-search "
                            id="sosearchpro"
                            >
                            <form
                                action="https://ullasshop.com/search/product"
                                method="POST"
                            >
                                <input
                                defaultValue="5GmB3Zvci1Eu2AxS6RaOeaikLMZClokHFxC9hPGQ"
                                name="_token"
                                type="hidden"
                                />
                                <div
                                className="search input-group form-group"
                                id="search0"
                                >
                                <i
                                    aria-hidden="true"
                                    className="fa fa-search"
                                />
                                <input
                                    className="form-control searchKey"
                                    name="name"
                                    placeholder="Search products"
                                    required
                                    style={{
                                    background: '#fff0',
                                    float: 'initial',
                                    height: '40px',
                                    width: '100%'
                                    }}
                                    title="Search products"
                                    type="text"
                                />
                                <span className="input-group-btn hidden-xs hidden-sm">
                                    <button
                                    className="button-search btn btn-default btn-lg"
                                    title="Search products"
                                    type="submit"
                                    >
                                    <i
                                        aria-hidden="true"
                                        className="hidden-lg hidden-md fa fa-search"
                                    />
                                    <p className="hidden-xs hidden-sm">
                                        Search
                                    </p>
                                    </button>
                                </span>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div className="header-cart-phone col-lg-4 col-md-4 col-xs-3 hidden-xs hidden-sm">
                        <div     className=""        id="cart"          >
                            <a   className="-df -i-ctr -gy8 -hov-or5 -phs -fs16"   href="https://ullasshop.com/cart/empty"   >
                            <span    className="-mrs -fs0"      data-bdg="0"   >
                                <img
                                alt="shopping-cart"
                                height="25"
                                src="https://ullasshop.com/public/upload/images/shopping-cart.png"
                                title="shopping-cart"
                                width="25"
                                />
                                <p className="cartCount">
                                0
                                </p>
                                Cart
                            </span>
                            </a>
                        </div>
                            {dbuttons}
                            {profile}
                        <div className="btn-group user">
                            <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            className="btn btn-secondary dropdown-toggle users"
                            data-display="static"
                            data-toggle="dropdown"
                            type="button"
                            >
                            More
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg-right">
                            <a
                                className="dropdown-item"
                                href=""
                                type="button"
                            >
                                Help Center
                            </a>
                            <a
                                className="dropdown-item"
                                href="order-tracking.html"
                                type="button"
                            >
                                Place & Track Order
                            </a>
                            <a
                                className="dropdown-item"
                                href=""
                                type="button"
                            >
                                Order Cancellation
                            </a>
                            <a
                                className="dropdown-item"
                                href=""
                                type="button"
                            >
                                Returns & Refunds
                            </a>
                            <a
                                className="dropdown-item"
                                href=""
                                type="button"
                            >
                                Payment & Account
                            </a>
                            <p className="dropdown-item signin ss">
                                <a
                                href=""
                                type="button"
                                >
                                <i
                                    aria-hidden="true"
                                    className="fa fa-commenting-o"
                                />
                                {' '}Live Help
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="header-bottom hidden-compact">
                    <div className="container">
                    <div className="header-bottom-inner">
                        <div className="row">
                        <div className="header-bottom-left menu-vertical hidden-md col-md-12 col-sm-6 col-xs-7">
                            <div className="megamenu-style-dev megamenu-dev">
                            <div className="responsive">
                                <div className="so-vertical-menu no-gutter">
                                <nav className="navbar-default">
                                    <div
                                    className="container-megamenu container vertical"
                                    style={{
                                        background: 'transparent'
                                    }}
                                    >
                                    <div className="vertical-wrapper">
                                        <span
                                        className="fa fa-times"
                                        id="remove-verticalmenu"
                                        />
                                        <div className="megamenu-pattern">
                                        <div className="container">
                                            <ul id="list_apon">
                                            <li>
                                                <a
                                                href="https://ullasshop.com/all/category"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Categories
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/seller/create"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Seller Registration
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/seller/login"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Seller Login
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href=""
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Campaign
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/about-us"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/privacy-policy"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Privacy & Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/seller-policy"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Seller Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/brand-policy"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Brand Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/return-refund-policy"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Return & Refund Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="https://ullasshop.com/contact-us"
                                                title=""
                                                >
                                                <i className="fa fa-angle-double-right" />
                                                Contact Us
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </nav>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    aria-labelledby="myModalLabel2"
                    className="modal right fade"
                    id="myModal2"
                    role="dialog"
                    tabIndex="-1"
                >
                    <div
                    className="modal-dialog"
                    role="document"
                    >
                    <div className="modal-content">
                        <div className="modal-header">
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                        >
                            <i
                            aria-hidden="true"
                            className="fa fa-chevron-left"
                            />
                        </button>
                        <div
                            className="sosearchpro-wrapper so-search "
                            id="sosearchpro"
                        >
                            <form
                            action="https://ullasshop.com/search/product"
                            method="POST"
                            >
                            <input
                                defaultValue="5GmB3Zvci1Eu2AxS6RaOeaikLMZClokHFxC9hPGQ"
                                name="_token"
                                type="hidden"
                            />
                            <div
                                className="search input-group form-group"
                                id="search0"
                            >
                                <input
                                className="form-control searchKey"
                                name="name"
                                placeholder="Search products"
                                required
                                style={{
                                    background: '#fff0',
                                    float: 'initial'
                                }}
                                title="Search products"
                                type="text"
                                />
                                <span className="input-group-btn hidden-xs">
                                <button
                                    className="button-searchs btn btn-default btn-lg"
                                    title="Search products"
                                    type="submit"
                                >
                                    <i
                                    aria-hidden="true"
                                    className="fa fa-search"
                                    />
                                </button>
                                </span>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={this.setUser} />} /> 
          <Route path="/register" element={<Register setUser={this.setUser} />} />
          {/* <Route path="/profile"  element={()=><Profile user={this.state.user} setUser={this.setUser} />} /> */}
          <Route path="/profile"  element={<Profile user={this.state.user}  />} />

          <Route path="/category" element={<Categorymob />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />




        </Routes>
      </Router>

    )
  }
}

export default header