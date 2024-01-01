import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {


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
                                                <a className="dropdown-item" href="/">
                                                    Orders
                                                </a>
                                                <a className="dropdown-item" href="login-register.html">
                                                    Register
                                                </a>
                                                <a className="dropdown-item" href="login-register.html">
                                                    Log In
                                                </a>
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
                                <a
                                    href="index.html"
                                    className="logo-box text-lg-left text-center mb-md--30"
                                >
                                    <img src="assets/img/logo/logo.png" alt="logo" />
                                </a>
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
                                                <span className="mini-cart__count">15</span>
                                                <i className="icon_cart_alt mini-cart__icon" />
                                                <span className="mini-cart__ammount">
                                                    80.00 <i className="fa fa-angle-down" />
                                                </span>
                                            </button>
                                            <ul className="dropdown-menu " style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                                <ul>
                                                    <div className="content">
                                                        <p className='pt-2'>
                                                            <span  >
                                                                product name
                                                            </span>
                                                        </p>
                                                        <p >
                                                            <span >adet</span> x{" "}
                                                            <span >$price</span>
                                                        </p>
                                                        <hr />
                                                    </div>
                                                </ul>
                                                <li >
                                                    <a className="dropdown-item fs-6 ps-0" href="/">View Cart</a>
                                                    <a className="dropdown-item fs-6" href="/">Checkout</a>
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
                                            <a href="index-2.html" className="mainmenu__link">
                                                Home
                                            </a>
                                        </li>
                                        <li className="mainmenu__item">
                                            <a href="/" className="mainmenu__link">
                                                Shop
                                            </a>
                                        </li>
                                        <li className="mainmenu__item">
                                            <a href="/" className="mainmenu__link">
                                                Blog
                                            </a>
                                        </li>
                                        <li className="mainmenu__item">
                                            <a href="about.html" className="mainmenu__link">
                                                About Us
                                            </a>
                                        </li>
                                        <li className="mainmenu__item">
                                            <a href="contact.html" className="mainmenu__link">
                                                contact Us
                                            </a>
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
