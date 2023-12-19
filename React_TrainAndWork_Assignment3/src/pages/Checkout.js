import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Checkout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      billingAddress: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        address1: '',
        address2: '',
        country: '',
        townCity: '',
        state: '',
        zipCode: '',
      },
      paymentMethod: 'check',
      acceptTerms: false,
    };
  }

  handleInputChange = (section, field, value) => {
    this.setState((prevState) => ({
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
    console.log(this.state.billingAddress)
  };
  



  render() {
    return (
      <div>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/*=======  breadcrumb wrapper  =======*/}
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Checkout</h2>
                </div>
                {/*=======  End of breadcrumb wrapper  =======*/}
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          {/*=======  checkout page wrapper  =======*/}
          <div className="checkout-page-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="checkout-form">
                    {/* Checkout Form s*/}
                    <form action="#">
                      <div className="row row-40">
                        <div className="col-lg-7">
                          {/* Billing Address */}
                          <div id="billing-form" className="billing-form">
                            <h4 className="checkout-title">Billing Address</h4>
                            <div className="row">
                              <div className="col-md-6 col-12">
                                <label>First Name*</label>
                                <input type="text" placeholder="First Name"
                                  value={this.state.billingAddress.firstName}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'firstName', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Last Name*</label>
                                <input type="text" placeholder="Last Name"
                                  value={this.state.billingAddress.lastName}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'lastName', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Email Address*</label>
                                <input type="email" placeholder="Email Address"
                                  value={this.state.billingAddress.email}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'email', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Phone no*</label>
                                <input type="text" placeholder="Phone number"
                                  value={this.state.billingAddress.phone}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'phone', e.target.value)} />
                              </div>
                              <div className="col-12">
                                <label>Company Name</label>
                                <input type="text" placeholder="Company Name"
                                  value={this.state.billingAddress.company}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'company', e.target.value)} />
                              </div>
                              <div className="col-12">
                                <label>Address*</label>
                                <input type="text" placeholder="Address line 1"
                                  value={this.state.billingAddress.address1}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'address1', e.target.value)} />
                                <input type="text" placeholder="Address line 2"
                                  value={this.state.billingAddress.address2}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'address2', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Country*</label>
                                <input type="text" placeholder="Country"
                                  value={this.state.billingAddress.country}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'country', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Town/City*</label>
                                <input type="text" placeholder="Town/City"
                                  value={this.state.billingAddress.townCity}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'townCity', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>State*</label>
                                <input type="text" placeholder="State"
                                  value={this.state.billingAddress.state}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'state', e.target.value)} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Zip Code*</label>
                                <input type="text" placeholder="Zip Code"
                                  value={this.state.billingAddress.zipCode}
                                  onChange={(e) => this.handleInputChange('billingAddress', 'zipCode', e.target.value)} />
                              </div>
                              <div className="col-12">
                                <div className="check-box">
                                  <input type="checkbox" id="create_account" />
                                  <label htmlFor="create_account">
                                    Create an Acount?
                                  </label>
                                </div>
                                <div className="check-box">
                                  <input
                                    type="checkbox"
                                    id="shiping_address"
                                    data-shipping=""
                                  />
                                  <label htmlFor="shiping_address">
                                    Ship to Different Address
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Shipping Address */}
                        </div>
                        <div className="col-lg-5">
                          <div className="row">
                            {/* Cart Total */}
                            <div className="col-12">
                              <h4 className="checkout-title">Cart Total</h4>

                              <div className="checkout-cart-total">
                                <h4>
                                  Product <span>Total</span>
                                </h4>
                                {this.props.cart.map((item) => (

                                  <ul key={item.product.id} className='mt-2'>
                                    <li>
                                      {item.product.name} X {item.quantity} <span>${item.product.price*item.quantity}.toFixed(2)</span>
                                    </li>
                                  </ul>
                                ))}
                                <p>
                                  SubTotal <span>${this.props.calculateCartTotal()}</span>
                                </p>
                                <p>
                                  Shipping Fee <span>${(this.props.calculateCartTotal() * 0.05).toFixed(2)}</span>
                                </p>
                                <h4>
                                  Grand Total <span>${(this.props.calculateCartTotal() + (this.props.calculateCartTotal() * 0.05)).toFixed(2)}</span>
                                </h4>


                              </div>

                            </div>
                            {/* Payment Method */}
                            <div className="col-12">
                              <h4 className="checkout-title">Payment Method</h4>
                              <div className="checkout-payment-method">
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_check"
                                    name="payment-method"
                                    defaultValue="check"
                                  />
                                  <label htmlFor="payment_check">Check Payment</label>

                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_bank"
                                    name="payment-method"
                                    defaultValue="bank"
                                  />
                                  <label htmlFor="payment_bank">
                                    Direct Bank Transfer
                                  </label>

                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_cash"
                                    name="payment-method"
                                    defaultValue="cash"
                                  />
                                  <label htmlFor="payment_cash">Cash on Delivery</label>

                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_paypal"
                                    name="payment-method"
                                    defaultValue="paypal"
                                  />
                                  <label htmlFor="payment_paypal">Paypal</label>

                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_payoneer"
                                    name="payment-method"
                                    defaultValue="payoneer"
                                  />
                                  <label htmlFor="payment_payoneer">Payoneer</label>

                                </div>
                                <div className="single-method">
                                  <input type="checkbox" id="accept_terms" />
                                  <label htmlFor="accept_terms">
                                    I’ve read and accept the terms &amp; conditions
                                  </label>
                                </div>
                              </div>
                              <Link onClick={() => this.props.addToOrder(this.state.billingAddress)} className="theme-button place-order-btn">
                                PLACE ORDER
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of checkout page wrapper  =======*/}
        </div>

      </div>
    )
  }
}
