import React, { Component } from 'react'

export class cart extends Component {
  render() {
    return (
        <section className="main-area">
        <div className="container">
          <section id="cart-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="carts table-responsive">
                    <div className="cart-header">
                      <h2>
                        Customer Order
                      </h2>
                    </div>
                    <div className="cart-body">
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th> SN  </th>
                            <th> Photo </th>
                            <th> Name </th>
                            <th> Size </th>
                            <th> Quantity  </th>
                            <th>  Unit Price  </th>
                            <th>Total Price </th>
                            <th>  Action </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>  1  </td>
                            <td>
                               <img
                                alt=""
                                height="50px"
                                src=""
                              />
                            </td>
                            <td>
                              Thai Premium Argentina Home Kit 2022
                            </td>
                            <td>
                              M
                            </td>
                            <td />
                            <td />
                            <td>
                              As same as picture
                            </td>
                            <td>
                              <form
                                action="https://ullasshop.com/cart/update/bf19cfd40fec264b218331098ac5181c"
                                method="POST"
                              >
                                <input
                                  defaultValue="DV121yuj84UpX691Fk22KDmwvxzxfc05uKqW3o9Y"
                                  name="_token"
                                  type="hidden"
                                />
                                <input
                                  defaultValue="1"
                                  name="quantity"
                                  style={{
                                    width: '70px'
                                  }}
                                  type="number"
                                />
                                <button
                                  className="btn btn-sm btn-primary"
                                  type="submit"
                                >
                                  <i className="fa fa-edit" />
                                </button>
                              </form>
                            </td>
                            <td>
                              450
                            </td>
                            <td>
                              450
                            </td>
                            <td>
                              <form
                                action="https://ullasshop.com/cart/remove/bf19cfd40fec264b218331098ac5181c"
                                method="POST"
                              >
                                <input
                                  defaultValue="DV121yuj84UpX691Fk22KDmwvxzxfc05uKqW3o9Y"
                                  name="_token"
                                  type="hidden"
                                />
                                <input
                                  defaultValue="DELETE"
                                  name="_method"
                                  type="hidden"
                                />
                                <button
                                  className="btn btn-sm btn-danger"
                                  type="submit"
                                >
                                  <i className="fa fa-trash" />
                                </button>
                              </form>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="cart_total">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th>
                                Shipping Area
                                <span
                                  style={{
                                    color: 'red'
                                  }}
                                >
                                  *
                                </span>
                              </th>
                              <td>
                                <select
                                  className="form-control"
                                  id="shipping_cost"
                                  name=""
                                >
                                  <option value="0">
                                    Select Shipping Area
                                  </option>
                                  <option value="1">
                                    Inside Dhaka City
                                  </option>
                                  <option value="2">
                                    Outside Dhaka
                                  </option>
                                </select>
                                <span id="color costmsg" />
                              </td>
                            </tr>
                            <tr>
                              <th>
                                Product Price
                              </th>
                              <td>
                                <input
                                  defaultValue="450"
                                  id="subtotal_amount"
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>
                                Delivery Charge
                              </th>
                              <td>
                                <input
                                  className="form-control"
                                  defaultValue="0"
                                  readOnly
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>
                                Total
                              </th>
                              <td>
                                <input
                                  className="form-control"
                                  defaultValue="450"
                                  id="show_cost"
                                  type="text"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="coupon_area">
                        <form
                          action="https://ullasshop.com/apply/coupon"
                          method="POST"
                        >
                          <input
                            defaultValue="DV121yuj84UpX691Fk22KDmwvxzxfc05uKqW3o9Y"
                            name="_token"
                            type="hidden"
                          />
                          <span>
                            Enter Coupon Code
                          </span>
                          <br />
                          <input
                            name="coupon_code"
                            placeholder="Apply if you have any coupon code..."
                            type="text"
                          />
                          <button type="submit">
                            Apply
                          </button>
                        </form>
                      </div>
                      <div className="cart-btn-area">
                        {/* <a
                          href="https://ullasshop.com/checkout"
                          id="active_cart"
                        >
                          Check Out
                        </a> */}
                        <a
                          className="btn btn-sm btn-primary float-start"
                          id="normal_cart"
                          type="button"
                        >
                          Checkout
                        </a>
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

export default cart