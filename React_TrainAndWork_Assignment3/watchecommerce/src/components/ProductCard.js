import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div className="product-tab bg--dark-4 pt--80 pb--60 pt-md--60 pb-md--45">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <ul
                                className="nav nav-tabs product-tab__head bg--dark-4"
                                id="product-tab"
                                role="tablist"
                            >
                                <li className="product-tab__item nav-item active">
                                    <a
                                        className="product-tab__link nav-link active"
                                        id="nav-featured-tab"
                                        data-bs-toggle="tab"
                                        href="#nav-featured"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        Featured
                                    </a>
                                </li>
                                <li className="product-tab__item nav-item">
                                    <a
                                        className="product-tab__link nav-link"
                                        id="nav-new-tab"
                                        data-bs-toggle="tab"
                                        href="#nav-new"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        New Arrivals
                                    </a>
                                </li>
                                <li className="product-tab__item nav-item">
                                    <a
                                        className="product-tab__link nav-link"
                                        id="nav-bestseller-tab"
                                        data-bs-toggle="tab"
                                        href="#nav-bestseller"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        Bestseller
                                    </a>
                                </li>
                                <li className="product-tab__item nav-item">
                                    <a
                                        className="product-tab__link nav-link"
                                        id="nav-onsale-tab"
                                        data-bs-toggle="tab"
                                        href="#nav-onsale"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        On Sale
                                    </a>
                                </li>
                            </ul>
                            <div
                                className="tab-content product-tab__content"
                                id="product-tabContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-featured"
                                    role="tabpanel"
                                >
                                    <div className="product-carousel js-product-carousel">
                                        <div className="product-carousel-group">
                                            <div className=" bg--dark-4">
                                                <div className="product-img">
                                                    <img
                                                        style={{ height: 150, width: 150 }}
                                                        src="assets/img/products/1-450x450.jpg"
                                                        alt="Product"
                                                        className="primary-image"
                                                    />
                                                </div>
                                                <div className="product-content text-center">
                                                    <span>Cartier</span>
                                                    <h4>
                                                        <a href="product-details.html">Acer Aspire E 15</a>
                                                    </h4>
                                                    <div className="product-price-wrapper">
                                                        <span className="money">$550.00</span>
                                                        <h4>
                                                            <a href="product-details.html">Add to Cart</a>
                                                            <a href="product-details.html">Add to Wishlist</a>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="mirora_product_action bg--dark-4 text-center position-absolute">
                                                    <div className="product-rating">
                                                        <span>
                                                            <i className="fa fa-star theme-star" />
                                                            <i className="fa fa-star theme-star" />
                                                            <i className="fa fa-star theme-star" />
                                                            <i className="fa fa-star theme-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </div>
                                                    <p>
                                                        It is a long established fact that a reader will be
                                                        distracted by the readable content...
                                                    </p>
                                                    <div className="product-action">
                                                        <a
                                                            className="same-action"
                                                            href="wishlist.html"
                                                            title="wishlist"
                                                        >
                                                            <i className="fa fa-heart-o" />
                                                        </a>
                                                        <a
                                                            className="add_cart cart-item action-cart"
                                                            href="cart.html"
                                                            title="wishlist"
                                                        >
                                                            <span>Add to cart</span>
                                                        </a>
                                                        <a
                                                            className="same-action compare-mrg"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#productModal"
                                                            href="compare.html"
                                                        >
                                                            <i className="fa fa-sliders fa-rotate-90" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
