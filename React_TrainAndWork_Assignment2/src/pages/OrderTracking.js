import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class OrderTracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputIdToTrack: "",
    };
  }
  
  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleTrackButtonClick = () => {
 this.handleInputChange()
    console.log("Tracking Order ID:", this.state.inputIdToTrack);
  };
 
  render() {
    
    const  inputIdToTrack  = 3;

    console.log("Tracking Order ID LAZIMOLAN:", inputIdToTrack);
    console.log("track gelen", this.props.dbOrders);

    const orders = this.props.dbOrders || [];
   
    const filteredOrders = orders.filter(
      (order) => order[0]?.orderNo === inputIdToTrack
    );
    console.log("filteredOrders after filtering:", filteredOrders);
    // Logları ekleyin
    console.log("filteredOrders", filteredOrders);

    filteredOrders.forEach((order) => {
      console.log("order", order);
      order.forEach((item) => {
        console.log("item", item);
      });

    });
    return (

      <div>
        <>
          {/*====================  breadcrumb area ====================*/}
          <div className="breadcrumb-area section-space--breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  {/*=======  breadcrumb wrapper  =======*/}
                  <div className="breadcrumb-wrapper">
                    <h2 className="page-title">Order Tracking</h2>
                  </div>
                  {/*=======  End of breadcrumb wrapper  =======*/}
                </div>
              </div>
            </div>
          </div>
          {/*====================  End of breadcrumb area  ====================*/}
          {/*====================  page content wrapper ====================*/}
          <div className="page-content-wrapper">
            <div className="order-tracking-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/*=======  order tracking wrapper  =======*/}
                    <div className="order-tracking-wrapper">
                      {/*=======  order track form  =======*/}
                      <div className="order-track-form">
                        <p>
                          To track your order please enter your Order ID in the box
                          below and press the "Track" button. This was given to you on
                          your receipt and in the confirmation email you should have
                          received.
                        </p>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-12">
                              <label htmlFor="orderId">Order ID</label>
                              <input
                                type="text"
                                id="orderId"
                                placeholder="Found in your order confirmation email"
                                value={this.state.inputIdToTrack}
                                onChange={(e) => this.handleInputChange('inputIdToTrack', e.target.value)}
                              />
                            </div>
                            <div className="col-lg-12">
                              <label htmlFor="orderEmail">Billing email</label>
                              <input
                                type="text"
                                id="orderEmail"
                                placeholder="Email you used during checkout"
                              />
                            </div>
                            <div className="col-lg-12 text-center">
                              <Link onClick={this.handleTrackButtonClick} className="theme-button theme-button--order-track">
                                TRACK
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*=======  End of order track form  =======*/}
                    </div>
                    <div className="col-12">
                      <h4 className="checkout-title mt-5">Your Order</h4>

                      <div className="checkout-cart-total">
                        <h4>
                          Product <span>Total</span>
                        </h4>
                        {filteredOrders.map((order) => (
                          order.map((item) => (
                            item.items.map((product) => (
                              <ul key={product.id} className='mt-2'>
                                <li>
                                  {product.name} X {product.quantity} <span>${(product.price * product.quantity).toFixed(2)}</span>
                                </li>
                              </ul>
                            ))
                          ))
                        ))}
                        <div>
                          {filteredOrders.map((order) => {
                            let subTotal = 0;
                            order.forEach((item) => {
                              item.items.forEach((product) => {
                                subTotal += product.price * product.quantity;
                              });
                            });
                            return (
                              <p key="subtotal">
                                SubTotal <span>${subTotal.toFixed(2)}</span>
                              </p>
                            );
                          })}
                          {/* Shipping Fee Hesaplama */}
                          {filteredOrders.map((order) => {
                            let shippingFee = 0.05 * order.reduce(
                              (acc, item) =>
                                acc +
                                item.items.reduce((accItem, product) => accItem + product.price * product.quantity, 0),
                              0
                            );
                            return (
                              <p key="shippingFee">
                                Shipping Fee <span>${shippingFee.toFixed(2)}</span>
                              </p>
                            );
                          })}
                          {/* Grand Total Hesaplama */}
                          {filteredOrders.map((order) => {
                            let grandTotal =
                              order.reduce(
                                (acc, item) =>
                                  acc +
                                  item.items.reduce((accItem, product) => accItem + product.price * product.quantity, 0),
                                0
                              ) +
                              0.05 *
                              order.reduce(
                                (acc, item) =>
                                  acc +
                                  item.items.reduce(
                                    (accItem, product) => accItem + product.price * product.quantity,
                                    0
                                  ),
                                0
                              );
                            return (
                              <h4 key="grandTotal">
                                Grand Total <span>${grandTotal.toFixed(2)}</span>
                              </h4>
                            );
                          })}
                        </div>


                      </div>

                    </div>
                    {/*=======  End of order tracking wrapper  =======*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

      </div >
    )
  }
}
