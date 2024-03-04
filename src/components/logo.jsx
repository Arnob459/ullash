import React, { Component } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';


export class logo extends Component {
    state = {
        logo: [],
    
    }
    
    componentDidMount(){   
    
        axios.get('api-headerlogo')
        .then((response) => {
    
          this.setState({logo:response.data});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    
    }
    
  render() {
    const logos = this.state.logo;
    return (
                   
    <Link to="/">
      <img
         className="logozc"
         src={`http://127.0.0.1:8000/backend/assets/jpg/${logos.avatar}`}
      />
   </Link>

        


    )
  }
}

export default logo