import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-info-wrapper header-info-wrapper--alt-style">
                                    <div className="header-logo">
                                        <a href="/">
                                            <img src="assets/img/logo.png" className="img-fluid" alt="" />
                                            <img src="assets/img/logo-alt.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="header-navigation-wrapper">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to='/'>HOME</Link>
                                                </li>
                                                <li>
                                                    <Link to='/shop'>SHOP</Link>
                                                </li>
                                                <li>
                                                    <Link to='/blog'>BLOG</Link>
                                                </li>
                                                <li>
                                                    <Link to='/about'>ABOUT</Link>
                                                </li>
                                                <li>
                                                    <Link to='/contact'>CONTACT</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-icon-area">
                                        <div className="account-dropdown">
                                            <a href="my-account.html">
                                                Orders
                                                <i className="pe-7s-angle-down" />
                                            </a>
                                            <ul className="account-dropdown__list">
                                                <li>
                                                    <Link to="/cart">Shopping Cart</Link>
                                                </li>
                                                <li>
                                                    <Link to="/checkout">Checkout</Link>
                                                </li>
                                              
                                                <li>
                                                    <Link to="/ordertracking">Order Tracking</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-icon d-flex align-items-center">
                                            <ul className="header-icon__list">
                                                <li>
                                                    <a href="/" id="search-icon">
                                                        <i className="fa fa-search" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="fa fa-heart-o" />
                                                        <span className="item-count">{this.props.wish.length}</span>
                                                    </a>
                                                    <div className="minicart-wrapper">
                                                        <p className="minicart-wrapper__title">WISHLIST</p>

                                                        <div className="minicart-wrapper__items ps-scroll">
                                                            <div >
                                                                {this.props.wish.map((item) => (
                                                                    <div key={item.product.id} className="minicart-wrapper__items__single">
                                                                        <a href="/" className="close-icon">
                                                                            <i className="pe-7s-close" />
                                                                        </a>
                                                                        <div className="image">
                                                                            <a href="product-details-basic.html">
                                                                                <img
                                                                                    src="assets/img/products/product-1-90x100.jpg"
                                                                                    className="img-fluid"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content">
                                                                            <p className="product-title">
                                                                                <a href="product-details-basic.html">
                                                                                    {item.product.name}
                                                                                </a>
                                                                            </p>
                                                                            <p className="product-calculation">
                                                                                <span className="price">${item.product.price}</span>
                                                                            </p>
                                                                            <Link
                                                                                onClick={() => this.props.addToCart(item.product)}
                                                                                className="wishlist-cart-icon"
                                                                            >
                                                                                <i className="fa fa-shopping-basket" /> ADD TO CART
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>



                                                            <div className="minicart-wrapper__buttons mb-0">
                                                                <a
                                                                    href="wishlist.html"
                                                                    className="theme-button theme-button--minicart-button mb-0"
                                                                >
                                                                    VIEW WISHLIST
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="cart.html">
                                                        <i className="fa fa-shopping-basket" />
                                                        <span className="item-count">{this.props.cart.length}</span>
                                                    </a>
                                                    <div className="minicart-wrapper">
                                                        <p className="minicart-wrapper__title">CART</p>
                                                        <div className="minicart-wrapper__items ps-scroll">
                                                            
                                                                {this.props.cart.map((item) => (
                                                                    <div key={item.product.id} className="minicart-wrapper__items__single">
                                                                        <div onClick={()=>this.props.removeFromCart(item.product)} className="close-icon">
                                                                            <i className="pe-7s-close" />
                                                                        </div>
                                                                        <div className="image">
                                                                            <a href="product-details-basic.html">
                                                                                <img
                                                                                    src="assets/img/products/product-1-90x100.jpg"
                                                                                    className="img-fluid"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content">
                                                                            <p className="product-title">
                                                                                <a href="product-details-basic.html">
                                                                                    {item.product.name}
                                                                                </a>
                                                                            </p>
                                                                            <p className="product-calculation">
                                                                                <span className="count">{item.quantity}</span>x{" "}
                                                                                <span className="price">{item.product.price}</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            
                                                        </div>
                                                        <p className="minicart-wrapper__subtotal">
                                                            SUBTOTAL: <span>${this.props.calculateCartTotal()}</span>
                                                        </p>
                                                        <div className="minicart-wrapper__buttons">
                                                            <Link
                                                                to="/cart"
                                                                className="theme-button theme-button--minicart-button"
                                                            >
                                                                VIEW CART
                                                            </Link>
                                                            <Link
                                                                to="/checkout"
                                                                className="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0"
                                                            >
                                                                CHECKOUT
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
