import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export class profile extends Component {
  state = {
    name: '',
    email: '',
    phone: '',

  };

  componentDidMount() {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.setState({
        name: user.name,
        email: user.email,
        phone: user.phone,

      });
    }
  }

  render() {
    // let name;
    // let email;
    // if (this.props.user) {
    //   name = this.props.user.name;
    //   email = this.props.user.email;

    // }

    const { name, email, phone } = this.state;

    if (!localStorage.getItem('token')) {
      return<Navigate to={'/login'} />
      
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
                      Profile
                    </h3>
                  </div>
                  <div className="card-body">

     
                      <div className="form-group mt-1 text-center">
                      <h4> {name}</h4>

                      </div>
                      <br />

                      <div className="form-group mt-1 text-center">
                      <h4>Email: {email}</h4>

                      </div>
                      <div className="form-group mt-1 text-center">
                      <h4 htmlFor="">Phone: {phone}</h4>

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

export default profile