import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import axios from 'axios';


export class login extends Component {

    state={
        email:'',
        password:'',
        message:'',

    }


    formSubmit = (e) => {
        e.preventDefault();
        const data={
            email:this.state.email,
            password:this.state.password,

        }

        axios.post('api/user-login',data) 
          .then( (response) => {
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            this.setState({
                loggedIn:true
            })
            this.props.setUser(response.data.user);

          })
          .catch( (error) => {
            this.setState({message:error.response.data.message})
          });
    }

  render() {

    if (this.state.loggedIn) {
        return<Navigate to={'/profile'} />
        
    }
    if (localStorage.getItem('token')) {
        return<Navigate to={'/profile'} />
        
      }

    let error="";
    if (this.state.message) {
        error=(
            <div>
                <div >
                    {this.state.message}
                </div>
            </div>
        )
        
    }
    return (
        <section className="main-area">
  <div className="container">
    <section id="checkout-area">
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-lg-6 offset-lg-3">
            <div className="card">
              <div className="card-header">
                <h3>
                  Customer Login
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.formSubmit}             
                  method="POST"
                >
                    {error}
 
                  <div className="form-group mt-1">
                    <label htmlFor="">
                      Email
                    </label>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}}  
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className="form-group mt-1">
                    <label htmlFor="">
                      Password
                    </label>
                    <input onChange={(e)=>{this.setState({password:e.target.value})}} 
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <button
                      className="btn btn-sm btn-primary btn-block w-100"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              <Link to="/register">not register yet? registration here</Link>


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

export default login