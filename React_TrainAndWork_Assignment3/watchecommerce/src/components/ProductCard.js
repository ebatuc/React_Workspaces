import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div className="shop-product-wrap grid gridview-3 row no-gutters">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="mirora-product mb-md--10">
                    <div className="product-img">
                        <img
                            src="assets/img/products/1-450x450.jpg"
                            alt="Product"
                            className="primary-image"
                        />
                        <img
                            src="assets/img/products/1-1-450x450.jpg"
                            alt="Product"
                            className="secondary-image"
                        />

                    </div>
                    <div className="product-content text-center">
                        <span>Cartier</span>
                        <h4>
                            <a href="product-details.html">Acer Aspire E 15</a>
                        </h4>
                        <div className="product-price-wrapper">
                            <span className="money">$550.00</span>

                        </div>
                    </div>
                    <div className="mirora_product_action text-center position-absolute">
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
                        </div>
                    </div>
                </div>
                <div className="mirora-product-list">
                    <div className="product-img">
                        <img
                            src="assets/img/products/1-450x450.jpg"
                            alt="Product"
                            className="primary-image"
                        />
                        <img
                            src="assets/img/products/1-1-450x450.jpg"
                            alt="Product"
                            className="secondary-image"
                        />
                        <div className="product-img-overlay">
                            <span className="product-label discount">-7%</span>
                            <a
                                data-bs-toggle="modal"
                                data-bs-target="#productModal"
                                className="btn btn-transparent btn-fullwidth btn-medium btn-style-1"
                            >
                                Quick View
                            </a>
                        </div>
                    </div>
                    <div className="product-content">
                        <span>Cartier</span>
                        <h4>
                            <a href="product-details.html">Acer Aspire E 15</a>
                        </h4>
                        <div className="product-rating">
                            <span>
                                <i className="fa fa-star theme-star" />
                                <i className="fa fa-star theme-star" />
                                <i className="fa fa-star theme-star" />
                                <i className="fa fa-star theme-star" />
                                <i className="fa fa-star" />
                            </span>
                        </div>
                        <p className="product-desc">
                            It is a long established fact that a reader will be
                            distracted by the readable content...
                        </p>
                        <div className="product-price-wrapper">
                            <span className="money">$550.00</span>
                        </div>
                        <div className="product-action">
                            <a
                                className="add_cart cart-item action-cart"
                                href="cart.html"
                                title="wishlist"
                            >
                                <span>Add to cart</span>
                            </a>
                            <a
                                className="same-action"
                                href="wishlist.html"
                                title="wishlist"
                            >
                                <i className="fa fa-heart-o" />
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

        )
    }
}
