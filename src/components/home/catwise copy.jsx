import React, { Component } from 'react';
import axios from 'axios';

class Catwise extends Component {
    state = {
        cats: [],
        catpros: {},
    }

    componentDidMount() {
        axios.get('api-featured-categories')
            .then(response => {
                this.setState({ cats: response.data });

                // Fetch products for each category
                const requests = response.data.map(category => {
                    return axios.get(`api-categories/${category.id}`);
                });

                // Resolve all requests
                axios.all(requests)
                    .then(axios.spread((...responses) => {
                        const catpros = {};
                        responses.forEach((response, index) => {
                            const categoryId = this.state.cats[index].id;
                            catpros[categoryId] = response.data;
                        });

                        this.setState({ catpros });
                    }))
                    .catch(error => {
                        console.error('Error fetching products for categories:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }

    render() {
        const cats = this.state.cats;

        const allcats = cats.map((cat, idx) => (
            <div key={idx}>
                <div className="heading_title">
                    <h4>
                        {cat.name}
                        <a
                            className="see_more"
                            href=""
                        >
                            See More
                        </a>
                    </h4>
                </div>

                {this.state.catpros[cat.id] && (
                    this.state.catpros[cat.id].map((product, productIdx) => (
                        <div className="item-box" key={productIdx}>
                            <div className="image-box">
                                <a href="">
                                    <img
                                        alt=""
                                        src={`https://vendor.shoppinghobe.com/uploads/product/${product.photos}`}
                                    />
                                </a>
                            </div>
                            <div className="item-content">
                                <h5>
                                    <a href="">
                                        {product.name}
                                    </a>
                                </h5>
                                <p>
                                    <span className="sale_price">
                                        ৳{product.after_discount}
                                    </span>
                                    <span className="previous_price">
                                        ৳{product.unit_price}
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
                    ))
                )}
            </div>
        ));

        return (
            <div className="container">
                <div className="row">
                    {allcats}
                </div>
            </div>
        );
    }
}

export default Catwise;
