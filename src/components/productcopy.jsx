import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import axios from 'axios';

export class product extends Component {

    state = {
        product:'',
      };

      componentDidMount() {
        // Fetch product details based on the ID from the URL
        const id = this.props.match.params.id;
        axios.get('api-products/'+id)
          .then(response => {
            this.setState({ product: response.data.name });
          })
          .catch(error => {
            console.error('Error fetching product details:', error);
          });
      }
  render() {

    // const { product } = this.state;

    // if (!product) {
    //   return <div>Loading...</div>;
    // }


    return (
      <section className="main-area">
  <div className="container">
    <section id="details-area">
      <div className="container">
        <div className="row mt-2">
          <div className="breadcrumb_area">
            <nav
              aria-label="breadcrumb"
              style={{
                '--bs-breadcrumb-divider': '\'>\''
              }}
            >
              <ol className="breadcrumb">
               
                <li className="breadcrumb-item">
                  <a>
                    {this.state.product.name}
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5">
            <div className="details-image">
              <img
                className="big_image"
                data-zoom-image="https://ullasshop.com/public/back-end/image/product/big/exclusive-joggers-hoodie-unisex-combo-set-sat-sep-3-2022-500-pm.webp"
                id="zoom_04"
                src="https://ullasshop.com/public/back-end/image/product/big/exclusive-joggers-hoodie-unisex-combo-set-sat-sep-3-2022-500-pm.webp"
              />
            </div>
            <div className="details-image-gallery">
              <div className="details-slider">
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285465.png"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
                <div className="details-box">
                  <img
                    alt=""
                    id="small_image"
                    src="https://ullasshop.com/public/back-end/image/product/product-gallery/166220285490.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="product-details">
              <h5>
                Exclusive Joggers & Hoodie unisex Combo set
              </h5>
              <h6>
                Product Code: 1004
              </h6>
              <h6>
                Brand: Sourcing Brand
              </h6>
              <p>
                <span className="current-price">
                  Price:- ৳1200
                </span>
                <span
                  style={{
                    color: 'red',
                    textDecoration: 'line-through'
                  }}
                >
                  ৳1700
                </span>
                <span>
                  (500 ৳)
                </span>
              </p>
              <form
                action="https://ullasshop.com/cart/add"
                method="POST"
              >
                <input
                  defaultValue="ny4DCFjphHfEcoWBfW76xGIPQsG9NoncGnJ1vvXM"
                  name="_token"
                  type="hidden"
                />
                <input
                  defaultValue="11"
                  name="id"
                  type="hidden"
                />
                <div className="product-size">
                  <span
                    style={{
                      fontWeight: '600'
                    }}
                  >
                    Select Body Size
                    <span
                      style={{
                        color: 'red'
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <select
                    id="body"
                    name="body"
                    style={{
                      border: '1px solid rgba(0,0,0,.5)'
                    }}
                  >
                    <option value="40">
                      40
                    </option>
                    <option value="42">
                      42
                    </option>
                    <option value="44">
                      44
                    </option>
                    <option value="46">
                      46
                    </option>
                  </select>
                  <br />
                  <span
                    style={{
                      fontWeight: '600'
                    }}
                  >
                    Select Waist Size
                    <span
                      style={{
                        color: 'red'
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <select
                    id="waist"
                    name="waist"
                    style={{
                      border: '1px solid rgba(0,0,0,.5)'
                    }}
                  >
                    <option value="28">
                      28
                    </option>
                    <option value="30">
                      30
                    </option>
                    <option value="32">
                      32
                    </option>
                    <option value="34">
                      34
                    </option>
                    <option value="36">
                      36
                    </option>
                    <option value="38">
                      38
                    </option>
                    <option value="40">
                      40
                    </option>
                    <option value="42">
                      42
                    </option>
                    <option value="44">
                      44
                    </option>
                    <option value="48">
                      48
                    </option>
                  </select>
                  <br />
                  <span
                    style={{
                      fontWeight: '600'
                    }}
                  >
                    Select Color
                    <span
                      style={{
                        color: 'red'
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <select
                    id="color"
                    name="color"
                    style={{
                      border: '1px solid rgba(0,0,0,.5)'
                    }}
                  >
                    <option value="Black">
                      Black
                    </option>
                  </select>
                  <br />
                  <span
                    style={{
                      fontWeight: '600'
                    }}
                  >
                    Quantity
                    <span
                      style={{
                        color: 'red'
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <input
                    defaultValue="1"
                    id="quantity"
                    min="1"
                    name="quantity"
                    type="number"
                  />
                </div>
                <h6
                  style={{
                    fontFamily: '\'Roboto\'',
                    marginTop: '10px'
                  }}
                >
                  Delivery Time:{' '}
                  <span
                    style={{
                      fontWeight: '400'
                    }}
                  >
                    24 to 96 hours
                  </span>
                </h6>
                <h6
                  style={{
                    fontFamily: '\'Roboto\'',
                    marginTop: '10px'
                  }}
                >
                  Payment Mode:{' '}
                  <span
                    style={{
                      fontWeight: '400'
                    }}
                  >
                    Cash On Delivery
                  </span>
                  {' '}
                </h6>
                <div className="details-btn mt-1">
                  <button
                    className="cart-btn-d cartss"
                    type="submit"
                  >
                    <i className="fa fa-shopping-cart" />
                    Add To Cart
                  </button>
                  <button className="shop-btn-d shop">
                    <i className="fa fa-basket-shopping" />
                    Shop Now
                  </button>
                  <button className="shop-btn-d call">
                    <a href="tel:09613000345">
                      <i className="fa fa-phone" />
                      Call Now
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="product-details-area">
            <div className="product-descripton">
              <div className="product-description-header">
                Product Details
              </div>
              <div className="product-description-body">
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      𝐖𝐈𝐍𝐓𝐄𝐑 𝐀𝐋𝐄𝐑𝐓 ! 𝗘𝗫𝗖𝗟𝗨𝗦𝗜𝗩𝗘 ! 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗪𝗶𝗻𝘁𝗲𝗿𝘄𝗲𝗮𝗿 | 
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Fashionable winter top + bottom set with exclusive offer.
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Its very fashionable and comfortable to wear. 
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      <br />
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      🥼𝗦𝗜𝗭𝗘 𝗚𝗨𝗜𝗗𝗘
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Hoodie 
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      M- Chest 40'', Length 27''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      L- Chest 42'', Length 28''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      XL- Chest 44'', Length 29''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      XXL- Chest 46', Length 30''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      <br />
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Hoodie Materials: Cotton Fleece 
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      <br />
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Joggers:
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      M- Length 40'', Waist 30 to 33''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      L- Length 41'', Waist 34 to 37''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      XL- Length 41'', Waist 38 to 41''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      XXL- Length 41/42'', Waist 42 to 46''
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      <br />
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Joggers Materials: 100 %  Cotton French Terry 
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      <br />
                    </span>
                  </font>
                </div>
                <div style={{}}>
                  <font face="Arial, Verdana">
                    <span
                      style={{
                        fontSize: '13.3333px'
                      }}
                    >
                      Delivery Time: Inside Dhaka city 24 to 72 hrs & 70 tk delivery charge And Outside Dhaka 3 to 5 days.
                    </span>
                  </font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>
    )
  }
}

export default product