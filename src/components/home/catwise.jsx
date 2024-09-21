import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Catwise = () => {
    const [cats, setCats] = useState([]);
    const [catpros, setCatpros] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories
                const responseCats = await axios.get('api-featured-categories');
                setCats(responseCats.data);

                // Fetch products for each category
                const requests = responseCats.data.map(category => {
                    return axios.get(`api-categories/${category.id}`);
                });

                // Resolve all requests
                const responses = await axios.all(requests);
                const newCatpros = {};
                responses.forEach((response, index) => {
                    const categoryId = responseCats.data[index].id;
                    newCatpros[categoryId] = response.data;
                });

                setCatpros(newCatpros);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const allCats = cats.map((cat, idx) => (
        <div key={idx}>
            <div  key={cat.id} className="heading_title">
                <h4>
                    {cat.name}
                    <Link to={`/category/product/${cat.id}`} title={cat.name}
                        className="see_more"
                        href=""
                    >
                        See More
                        </Link>
                </h4>
            </div>


            {catpros[cat.id] && (
                catpros[cat.id].map((product, productIdx) => (
                    <div className="item-box" key={productIdx}>
                        <div className="image-box">
                        <Link className="nav-b -mhs" to={`/product/${product.id}`}>
                        <img
                            alt=""
                            src={`https://vendor.shoppinghobe.com/uploads/product/${product.photos}`}
                        />
                        </Link>
                        </div>
                        <div className="item-content">
                            <h5>
                            <Link to={`/product/${product.id}`}>

                                    {product.name}
                                    </Link>

                            </h5>
                            <p>
                                <span className="sale_price">
                                    ৳{product.after_discount}
                                </span>
                                <span className="previous_price">
                                    ৳{product.unit_price}
                                </span>
                            </p>
                            <Link to={`/product/${product.id}`}>
                            <button className="shop-now-btn">
                                <i className="fa fa-shopping-cart" />
                                shop now
                            </button>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                {allCats}
            </div>
        </div>
    );
};

export default Catwise;
