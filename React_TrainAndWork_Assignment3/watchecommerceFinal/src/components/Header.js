import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../features/CartSlice';


class Header extends Component {

    handleRemoveFromCart = (productId) => {
        this.props.removeFromCart({ productId });
    };

    render() {
        return (

            <header className="header header-style-2">

                <div className="header-top header-top-1">
                    <div className="container">
                        <div className="row no-gutters align-items-center">
                            <div className="col-lg-8 d-flex align-items-center flex-column flex-lg-row">
                                <ul className="social social-round mr--20">
                                    <li className="social__item">
                                        <a
                                            href="https://twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social__link"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a
                                            href="https://plus.google.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social__link"
                                        >
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a
                                            href="https://facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social__link"
                                        >
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a
                                            href="https://youtube.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social__link"
                                        >
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a
                                            href="https://instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social__link"
                                        >
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <div className="header-top-nav d-flex justify-content-lg-end justify-content-center">
                                    <div className="user-info header-top-nav__item">
                                        <div className="dropdown header-top__dropdown">
                                            <a
                                                href='/'
                                                className="dropdown-toggle"
                                                id="userID"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                My Account
                                                <i className="fa fa-angle-down" />
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="userID">
                                                <Link className="dropdown-item" to={"/Orders"}>
                                                    Orders
                                                </Link>
                                                <Link className="dropdown-item" to={"/Login"}>
                                                    Register
                                                </Link>
                                                <Link className="dropdown-item" to={"/Login"}>
                                                    Log In
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buraya cart gelecek */}



                <div className="header-middle header-middle-2">
                    <div className="container">
                        <div className="row no-gutters align-items-center">
                            <div className="col-lg-4">
                                <Link
                                    to={"/"}
                                    className="logo-box text-lg-left text-center mb-md--30"
                                >
                                    <img src="assets/img/logo/logo.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="col-lg-8">
                                <div className="header-toolbar header-toolbar-2">
                                    <ul className="header-toolbar-icons">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <li className="wishlist-icon me-2">
                                                    <a href="wishlist.html" className="bordered-icon">
                                                        <i className="fa fa-heart" />
                                                    </a>
                                                </li>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">
                                                    <p className='pt-2'>
                                                        <span className='me-2'  >
                                                            product name
                                                        </span>
                                                    </p>

                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="mini-cart__count">{this.props.cart.length>0 ? this.props.cart.length : 0}</span>
                                                <i className="icon_cart_alt mini-cart__icon" />
                                                <span className="mini-cart__ammount">
                                                $ {this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0).toFixed(1)} <i className="fa fa-angle-down" />
                                                </span>
                                            </button>
                                            <ul className="dropdown-menu " style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                                {this.props.cart.map((cartItem) => (
                                                    <ul key={cartItem.product.id}>
                                                        <div className="container text-center">
                                                            <div className="row">
                                                                <div className="col-9">
                                                                    <div className="content">
                                                                        <div className='pt-2'>

                                                                            <span  >
                                                                                {cartItem.product.title}
                                                                            </span>
                                                                        </div>
                                                                        <p >
                                                                            <span >{cartItem.quantity}</span> x{" "}
                                                                            <span >${cartItem.product.price}</span>
                                                                        </p>
                                                                        <hr />
                                                                    </div>
                                                                </div>
                                                                <div onClick={()=>this.handleRemoveFromCart(cartItem.product.id)} className="col-3 " style={{color:'red',cursor:'pointer'}}>
                                                                    X
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                ))}
                                                <li >
                                                    <Link to={"/Cart"} className="dropdown-item fs-6 ps-0" >View Cart</Link>
                                                    <Link to={"/Checkout"} className="dropdown-item fs-6" >Checkout</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Burada cart bitiyor*/}

                < div className="header-bottom header-bottom-2 position-relative navigation-wrap fixed-header" >
                    <div className="container position-static">
                        <div className="row">
                            <div className="col-12 position-static">
                                <nav className="main-navigation">
                                    <ul className="mainmenu">
                                        <li className="mainmenu__item">
                                            <Link to={"/"} className="mainmenu__link">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="mainmenu__item">
                                            <Link to={"Shop"} className="mainmenu__link">
                                                Shop
                                            </Link>
                                        </li>
                                        <li className="mainmenu__item">
                                            <Link to={"/Blogs"} className="mainmenu__link">
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="mainmenu__item">
                                            <Link to={"/About"} className="mainmenu__link">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="mainmenu__item">
                                            <Link to={"/Contact"} className="mainmenu__link">
                                                contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="mobile-menu" />
                            </div>
                        </div>
                    </div>
                </div>

            </header >

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    };
};



export default connect(mapStateToProps,{removeFromCart})(Header);
