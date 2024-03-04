import React, { useEffect, useState,  useRef } from 'react';
import axios from 'axios';
import { useParams, Link, } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
  const bodyRef = useRef(null);
  const colorRef = useRef(null);
  const waistRef = useRef(null);
  const reviewRef = useRef(null);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [attributeValues, setAttributeValues] = useState([]);
  const [atrColorValues, setAtrColorValues] = useState([]);
  const [atrWaistValues, setAtrWaistValues] = useState([]);
  const [galleryImages, setgalleryImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');



  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`api-products/${id}`)
      .then(response => {
        setProduct(response.data.product);

        if (response.data.product && response.data.product.size) {
          fetchAttributeValues(response.data.product.size);
        }
        if (response.data.product && response.data.product.waist) {
          fetchAtrWaistValues(response.data.product.waist);
        }

        if (response.data.product && response.data.product.color) {
          fetchAtrColorValues(response.data.product.color);
        }

        if (response.data.product && response.data.product.id) {
          fetchgalleryImages(response.data.product.id);
        }
        fetchProductReviews(response.data.product.id);

      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const fetchAttributeValues = async (sizeAtr) => {
    try {
      const response = await axios.get(`api-size/${sizeAtr}`);
      setAttributeValues(response.data);
    } catch (error) {
      console.error('Error fetching attribute values:', error);
    }
  };

  const fetchAtrWaistValues = async (waistAtr) => {
    try {
      const response = await axios.get(`api-waist/${waistAtr}`);
      setAtrWaistValues(response.data);
    } catch (error) {
      console.error('Error fetching waist attribute values:', error);
    }
  };

  const fetchAtrColorValues = async (colorAtr) => {
    try {
      const response = await axios.get(`api-color/${colorAtr}`);
      setAtrColorValues(response.data);
    } catch (error) {
      console.error('Error fetching color attribute values:', error);
    }
  };

  const fetchgalleryImages = async (proId) => {
    try {
      const response = await axios.get(`api-thumb/${proId}`);
      setgalleryImages(response.data);
    } catch (error) {
      console.error('Error fetching color attribute values:', error);
    }
  };



  const fetchProductReviews = async (proId) => {
    try {
      const response = await axios.get(`api-review/${proId}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching product reviews:', error);
    }
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    const review = reviewRef.current.value;
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      toast.error('User not logged in. Please log in to add a review.');
      return;
    }
    const user = JSON.parse(storedUser);
    const isAuthenticated = !!storedUser;
    const name = user.name;
    // Send review and username to the backend API
    try {
      const response = await axios.post('api-review', {
        product_id: product.id,
        review,
        name,
      });
      // Assuming the API responds with the updated review list
      // setReviews(response.data);
      // Clear the review input field
      // setReviewText('');
      toast.success('Review added successfully!!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate('/');
      }, 1000); 
    } catch (error) {
      console.error('Error adding review:', error);
      toast.error('Failed to add review. Please try again later.');
    }
  };
  
  
  if (!product) {
    return (
    <section className="main-area">
    <div className="container">
      <section id="details-area">
        <div className="container">
          Loading..


        </div>
      </section>
    </div>
  </section>
     ) ;
  }
  const descriptionHtml = { __html: product.description };

  const storedUser = localStorage.getItem('user');
  let user_id; // Declare user_id variable outside the conditional block

  if (storedUser) {
    const user = JSON.parse(storedUser);
    user_id = user.id;
  }


  const handleAddToCart = async (event, product_id) => {
    event.preventDefault();
    if (!user_id) {
      // Redirect to the login page
      console.error('User is not logged in. Redirecting to the login page.');
      navigate('/login'); // Use the history object to navigate
      return; // Exit the function early
    }
  

    const size = bodyRef.current ? bodyRef.current.value : '';
    const waist = waistRef.current ? waistRef.current.value : '';
    const color = colorRef.current ? colorRef.current.value : '';

    const quantity = document.getElementById('quantity').value;
  
  
      const response = await axios.post('/cart-product', {
        user_id,
        product_id,
        size,
        waist,
        color,
        quantity,
      });
      if (response.status == 200) {
        toast.success('Product added to the cart successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          navigate('/cart');
        }, 2000); 
        console.log(response.data.message)
      } else {
        console.error('Error adding to cart');
      }

  };
  
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
                      <a href="#">
                      {product.name} 
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
                data-zoom-image={`http://127.0.0.1:8000/uploads/product/${product.photos}`}
                id="zoom_04"
                src={`http://127.0.0.1:8000/uploads/product/${product.photos}`}
              />
            </div>
            <div className="details-image-gallery">
              <div className="details-slider">
              {galleryImages.map((value) => (
                        
                <div className="details-box" key={value.id} >
                  <img
                    alt=""
                    id="small_image"
                    src={`http://127.0.0.1:8000/uploads/product/${value.icon}`}
                  />                  
                </div>
                ))}



              </div>
            </div>

          </div>
          <div className="col-lg-7">
            <div className="product-details">
              <h5> {product.name}  </h5>

              <h6> Brand: {product.brand_name}  </h6>
              <p>
                <span className="current-price">
                  Price:- ৳{product.after_discount}
                </span>
                <span style={{  color: 'red', textDecoration: 'line-through' }} > ৳{product.unit_price} </span>
              </p>
              <form  onSubmit={(event) => handleAddToCart(event, id)} >


                            {attributeValues.length > 0 && (
              <div className="product-size">
                <span style={{ fontWeight: '600' }}>Select Size</span>
                <br />
                <select ref={bodyRef} id="body" name="body" style={{ border: '1px solid rgba(0,0,0,.5)' }}>
                  {attributeValues.map((value) => (
                    <option key={value.id} value={value.value}>
                      {value.value}
                    </option>
                  ))}
                </select>
                <br />
              </div>
            )}

          {atrWaistValues.length > 0 && (
                        <div className="product-size">
                          <span style={{ fontWeight: '600' }}>Select Waist Size</span>
                          <br />
                          <select ref={waistRef} id="waist" name="waist" style={{ border: '1px solid rgba(0,0,0,.5)' }}>
                            {atrWaistValues.map((value) => (
                              <option key={value.id} value={value.value}>
                                {value.value}
                              </option>
                            ))}
                          </select>
                          <br />
                        </div>
                      )}

            {atrColorValues.length > 0 && (
              <div className="product-size">
                <span style={{ fontWeight: '600' }}>Select Color</span>
                <br />
                <select ref={colorRef} id="color" name="color" style={{ border: '1px solid rgba(0,0,0,.5)' }}>
                  {atrColorValues.map((value) => (
                    <option key={value.id} value={value.value}>
                      {value.value}
                    </option>
                  ))}
                </select>
                <br />
              </div>
            )}
                  <br />               
                  <span   style={{fontWeight: '600'}}>Quantity</span>
                  <br />
                  <input  defaultValue="1"  id="quantity" min="1" name="quantity" type="number" />

                <h6     style={{fontFamily: '\'Roboto\'', marginTop: '10px'}}  >
                  Delivery Time:
                  <span  style={{fontWeight: '400'}}  >24 to 96 hours</span>
                </h6>
                <h6   style={{fontFamily: '\'Roboto\'', marginTop: '10px'}} >
                  Payment Mode:
                  <span style={{ fontWeight: '400' }} >Cash On Delivery</span>
                </h6>
                <div className="details-btn mt-1">
                <button
                    className="cart-btn-d cartss"
                    type="submit"
                  >
                    <i className="fa fa-shopping-cart" />
                    Add To Cart
                  </button>

                </div>
              </form>
              <ToastContainer position="top-right" />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="product-details-area">
            <div className="product-descripton">
              <div className="product-description-header">
                Product Details
              </div>
              <div className="product-description-body" dangerouslySetInnerHTML={descriptionHtml} />

            </div>
          </div>
        </div>
              <div className="row ">
                <div className="product-details-area">
                  <div className="product-descripton">
                    <div className="product-description-header">
                      Product Review
                    </div>
                    <div className="product-description-body">
                      {reviews.map(review => (
                        <div key={review.id}>
                          <h5>{review.user_name}</h5>
                          <p>Review: {review.review}</p>
                          <br />
                        </div>
                      ))}
                    {localStorage.getItem('user') && (
                        <form onSubmit={handleReviewSubmit}>
                          <textarea ref={reviewRef} rows="2" placeholder=" Write your review"></textarea> <br />
                          <button type="submit" className='btn btn-success'>Submit Review</button>
                        </form>
                      )}
                      {!localStorage.getItem('user') && (
                        <p>Please <Link to="/login">log in</Link> to add a review.</p>
                      )}
                    </div>
                </div>
              </div>
              </div>



          </div>
        </section>
      </div>
    </section>
  );
};

export default Product;
