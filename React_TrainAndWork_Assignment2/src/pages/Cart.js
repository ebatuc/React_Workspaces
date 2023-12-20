import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/*=======  breadcrumb wrapper  =======*/}
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Shopping Cart</h2>
                </div>
                {/*=======  End of breadcrumb wrapper  =======*/}
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          {/*=======  shopping cart wrapper  =======*/}
          <div className="shopping-cart-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/*=======  cart table  =======*/}
                  <div className="cart-table-container">
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th className="product-name" colSpan={2}>
                            Product
                          </th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.cart.map((item) => (
                          <tr key={item.product.id}>
                            <td className="product-thumbnail">
                              <img
                                src="assets/img/products/product-9-1-600x800.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </td>
                            <td className="product-name">
                              <Link to="/cart">{item.product.name}</Link>
                            </td>
                            <td className="product-price">
                              <span className="price">${item.product.price}</span>
                            </td>
                            <td className="product-quantity">
                              <div className="pro-qty d-inline-block mx-0">
                                <input type="text" defaultValue={item.quantity} />
                              </div>
                            </td>
                            <td className="total-price">
                              <span className="price">${(item.product.price * item.quantity).toFixed(2)}</span>
                            </td>
                            <td className="product-remove">
                              <Link onClick={() => { this.props.removeFromCart(item.product) }}>
                                <i className="pe-7s-close" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                    </table>
                  </div>
                  {/*=======  End of cart table  =======*/}
                </div>
                <div className="col-lg-12">
                  {/*=======  coupon area  =======*/}
                  <div className="cart-coupon-area">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6 text-start text-lg-end">
                        {/*=======  update cart button  =======*/}
                        <button className="theme-button">UPDATE CART</button>
                        {/*=======  End of update cart button  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of coupon area  =======*/}
                </div>
                <div className="col-lg-6 offset-lg-6">
                  <div className="cart-calculation-area">
                    <h2 className="cart-calculation-area__title">Cart totals</h2>
                    <table className="cart-calculation-table">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td className="subtotal">${this.props.calculateCartTotal()}</td>
                        </tr>
                        <tr>
                          <th>TOTAL</th>
                          <td className="total">${this.props.calculateCartTotal()}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="cart-calculation-button">
                      <Link to="/checkout" className="theme-button theme-button--alt theme-button--checkout">
                        PROCEED TO CHECKOUT
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of shopping cart wrapper  =======*/}
        </div>

      </div>
    )
  }
}
