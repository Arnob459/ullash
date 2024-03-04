import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Home from '../components/home';
import About from '../components/about';
import Login from '../components/login';
import Register from '../components/register';
import Profile from '../components/profile';
import Categorymob from '../components/category';
import Logo from '../components/logo';
import Product from '../components/product';
import Cart from '../components/cart';
import Cartcart from '../components/cartcart';
import Policy from '../components/policy';
import Brandpolicy from '../components/brandpolicy';
import Sellerpolicy from '../components/sellerpolicy';
import Refund from '../components/refund';
import Contact from '../components/contact';
import Checkout from '../components/checkout';
import Order from '../components/order';
import ProductList from '../components/home/productList';
import BrandProduct from '../components/home/brandProduct';




import Footer from './footer';






const Header = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    axios.get('api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const buttons = localStorage.getItem('token') ? (
    <Link className="nav-b -mhs" to="/profile">
      <i aria-hidden="true" className="fa fa-user-o" />
    </Link>
  ) : (
    <Link className="nav-b -mhs" to="/login">
      <i aria-hidden="true" className="fa fa-user-o" />
    </Link>
  );

  const mbuttons = localStorage.getItem('token') ? (
    <Link className="bottom-nav-link" to="/" onClick={logout}>
      <i className="fa fa-user-circle" />
      <span>Logout</span>
    </Link>
  ) : (
    <Link className="bottom-nav-link" to="/login">
      <i className="fa fa-user-circle" />
      <span>Login</span>
    </Link>
  );

  const dbuttons = !localStorage.getItem('token') && (
    <div className="btn-group user">
      <button
        aria-expanded="false"
        aria-haspopup="true"
        className="btn btn-secondary dropdown-toggle users"
        data-display="static"
        data-toggle="dropdown"
        type="button"
      >
        Login
      </button>
      <div className="dropdown-menu dropdown-menu-lg-right">
        <p className="dropdown-item signin">
          <a type="button">
            <Link to="/login">Sign in</Link>
          </a>
          <a style={{ marginTop: '5px' }} type="button">
            <Link to="/register">Sign up</Link>
          </a>
        </p>
      </div>
    </div>
  );

  const profile = localStorage.getItem('token') && (
    <div className="btn-group user">
      <Link to="/profile">
        <button className="btn btn-secondary dropdown-toggle users" data-display="static" type="button">
          Profile
        </button>
      </Link>
      <Link to="/" onClick={logout}>
        <button className="btn btn-secondary dropdown-toggle users" data-display="static" type="button">
          Logout
        </button>
      </Link>
    </div>
  );

  return (
    <Router>
      <div id="wrapper" user={user} setUser={setUser}>
        {/* ... Your header JSX ... */}
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
                <Link to="/"
                    className="bottom-nav-item"
                    href=""
                    >
                    <div className="bottom-nav-link">
                        <i className="fa fa-home" />
                        <span>
                        Home
                        </span>
                    </div>
                    </Link>
                    <Link to="/category"
                    className="bottom-nav-item"
                    href=""
                    >
                    <div className="bottom-nav-link">
                        <i className="fa fa-bars" />
                        <span>
                        Category
                        </span>
                    </div>
                    </Link>
                    <Link to="/cart"
                    className="bottom-nav-item"  >
                    <div className="bottom-nav-link ">
                        {/* <i
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
                        </i> */}
                        <i className="fa fa-cart-plus" />
                        <span>
                        Cart
                        </span>
                    </div>
                    </Link>
                    <Link to="/cart"
                    className="bottom-nav-item"
                    >
                    <div className="bottom-nav-link">
                        <i className="fa fa-heart" />
                        <span>
                        Wishlist
                        </span>
                    </div>
                    </Link>
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
                            {/* <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" /> */}
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
                                <Link to='/cart' className="-df -i-ctr -gy8 -hov-or5 -phs -fs16">

                                
                                <span className="-mrs -fs0"  data-bdg="0" >
                                    <img alt="shopping-cart" height="25" src={`http://127.0.0.1:8000/uploads/icon/sp.png`} title="shopping-cart" width="25" />

                                </span>

                                </Link>
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
                            <form  >

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
                            <Link to='/cart'   className="-df -i-ctr -gy8 -hov-or5 -phs -fs16"      >
                            <span    className="-mrs -fs0"      data-bdg="0"   >
                                <img
                                alt="shopping-cart"
                                height="25"
                                src={`http://127.0.0.1:8000/uploads/icon/sp.png`}
                                title="shopping-cart"
                                width="25"
                                />
                                {/* <p className="cartCount">
                                0
                                </p> */}
                                Cart
                            </span>
                            </Link>

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
                                href=""
                                type="button"
                            >
                                Order Cancellation
                            </a>
                            <Link to='/refund'
                                className="dropdown-item"
                                href=""
                                type="button"
                            >
                                Returns & Refunds
                            </Link>
                            <Link to='/policy'
                                className="dropdown-item"
                                href=""
                                type="button"
                            >
                                Privacy & Policy
                            </Link>
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
                            <form  >

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/category" element={<Categorymob />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartcart" element={<Cartcart />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/brandpolicy" element={<Brandpolicy />} />
          <Route path="/sellerpolicy" element={<Sellerpolicy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/category/product/:categoryId" element={<ProductList />} />
          <Route path="/brand/product/:brandId" element={<BrandProduct />} />


          
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
};

export default Header;
