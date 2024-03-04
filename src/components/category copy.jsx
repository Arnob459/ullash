import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import axios from 'axios';

export class category extends Component {

    state = {
        categories: [],
    }

    componentDidMount(){
        axios.get('api-categories')
        .then((response) => {

          this.setState({categories:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

  render() {
            const categories = this.state.categories;

            const allcategoriesmob = categories.map((category,idx)=>{
                return (

                    <div className="mobile-category-item">
                    <a
                        href=""
                        title={category.name}
                    >
                        <img src={`http://127.0.0.1:8000/uploads/category/${category.icon}`} />
                    </a>
                    <p>
                        <a href="">
                        {category.name}
                        </a>
                    </p>
                    </div>


                ) 
            });

    return (
        <section className="main-area">
        <div className="container">
            <section className="mobile-category-area">
            <div className="container-fluid">
                <div className="row">
                <div className="aponss">
                   {allcategoriesmob}
                </div>
                </div>
            </div>
            </section>
        </div>
        </section>
    )
  }
}

export default category