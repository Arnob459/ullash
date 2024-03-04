import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import axios from 'axios';

export class register extends Component {

  state={
    name:'',
    email:'',
    phone:'',
    password:'',
    password_confirmation:'',
    message:'',

}


formSubmit = (e) => {
    e.preventDefault();
    const data={
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation,

    }

    axios.post('api/user-register',data) 
      .then( (response) => {
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.setState({
            loggedIn:true
        })
        this.props.setUser(response.data.user);

      })
      .catch( (error) => {
        if (error.response.status === 422) {
          // Handle validation errors
          const validationErrors = error.response.data.message;
          const errorMessages = Object.values(validationErrors).flat();
          this.setState({ message: errorMessages });
        } else {
          // Handle other errors
          console.error(error);
          this.setState({ message: 'An unexpected error occurred.' });
        }

      });
}
  render() {
    if (this.state.loggedIn) {
      return<Navigate to={'/profile'} />
      
  }
  if (localStorage.getItem('token')) {
    return<Navigate to={'/profile'} />
    
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
                        Create Account
                        </h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.formSubmit}  
                        method="POST"
                        >
                    {this.state.message && (
                        <div>
                          <h4>Error:</h4>
                          <ul>
                            {this.state.message.map((errorMessage, index) => (
                              <li key={index}>{errorMessage}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                        <div className="form-group">
                            <label htmlFor="">
                            Name
                            </label>
                            <input onChange={(e)=>{this.setState({name:e.target.value})}}  
                            className="form-control"
                            defaultValue=""
                            name="name"
                            placeholder="Name"
                            type="text"
                            />
                        </div>
                        <div className="form-group mt-1">
                            <label htmlFor="">
                            Email
                            </label>
                            <input onChange={(e)=>{this.setState({email:e.target.value})}}  
                            className="form-control"
                            defaultValue=""
                            name="email"
                            placeholder="Email"
                            type="text"
                            />
                        </div>
                        <div className="form-group mt-1">
                            <label htmlFor="">
                            Phone Number
                            </label>
                            <input onChange={(e)=>{this.setState({phone:e.target.value})}}  
                            className="form-control"
                            defaultValue=""
                            name="phone"
                            placeholder="Phone Number"
                            type="text"
                            />
                        </div>

                        <div className="form-group mt-1">
                            <label htmlFor="">
                            Password
                            </label>
                            <input onChange={(e)=>{this.setState({password:e.target.value})}}  
                            className="form-control"
                            defaultValue=""
                            name="password"
                            placeholder="Password"
                            type="password"
                            />
                        </div>
                        <div className="form-group mt-1">
                            <label htmlFor="">
                            Confirm Password
                            </label>
                            <input onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}  
                            className="form-control"
                            defaultValue=""
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            type="password"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <button
                            className="btn btn-sm btn-primary btn-block w-100"
                            type="submit"
                            >
                            Submit
                            </button>
                        </div>
                        </form>
              <Link to="/login">Login Here</Link>

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

export default register