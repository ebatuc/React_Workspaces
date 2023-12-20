import React, { Component } from 'react'
import ProductSide from './ProductSide'
import ProductHeader from './ProductHeader'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {
  render() {
    return (
      <div className="page-content-wrapper">
        {/*=======  shop page area  =======*/}
        <div className="shop-page-area">
          <div className="container">
            <div className="row">
              {/* sidebar buraya */}
              <ProductSide categories={this.props.categories} brands={this.props.brands}
                getProducts={this.props.getProducts}
                getProductsByBrand={this.props.getProductsByBrand} />

              <div className="col-lg-9 order-1 order-lg-2">
                {/*=======  shop content wrapper  =======*/}
                <div className="shop-content-wrapper">
                  {/*=======  shop header wrapper  =======*/}
                  {/* header buraya */}

                  <ProductHeader categories={this.props.categories} />


                  <div className="shop-product-wrap shop-product-wrap--with-sidebar row grid">
                    {this.props.products?.map(product => (
                      <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-custom-sm-6 col-12">
                        <div className="single-grid-product">
                          <div className="single-grid-product__image">

                            <a href="productdetail" className="image-wrap">
                              <img
                                src="assets/img/products/product-9-1-600x800.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src="assets/img/products/product-9-2-600x800.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <div className="product-hover-icon-wrapper">
                              <span className="single-icon single-icon--quick-view">
                                <a
                                  className="cd-trigger"
                                  href="/qv-1"
                                  data-tippy="Quick View"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay={50}
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                >
                                  <i className="fa fa-search" />
                                </a>
                              </span>
                              <span className="single-icon single-icon--add-to-cart">
                                <Link
                                  href="/"
                                  data-tippy="Add to cart"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay={50}
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                  onClick={() => this.props.addToCart(product)}
                                >
                                  {" "}
                                  <i className="fa fa-shopping-basket" />{" "}
                                  <span >ADD TO CART</span>
                                </Link>
                              </span>
                              <span className="single-icon single-icon--compare">
                                <a
                                  href="/"
                                  data-tippy="Compare"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay={50}
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                >
                                  <i className="fa fa-exchange" />
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="single-grid-product__content">
                            <h3 className="title">
                              <a href="productdetail">{product.name}</a>
                            </h3>
                            <div className="price">
                              <span className="discounted-price">${product.price}</span>
                            </div>
                            <div className="rating">
                              <i className="fa fa-star active" />
                              <i className="fa fa-star active" />
                              <i className="fa fa-star active" />
                              <i className="fa fa-star active" />
                              <i className="fa fa-star" />
                            </div>

                            <Link
                              
                              className="favorite-icon"
                              data-tippy="Add to Wishlist"
                              data-tippy-inertia="true"
                              data-tippy-animation="shift-away"
                              data-tippy-delay={50}
                              data-tippy-arrow="true"
                              data-tippy-theme="sharpborder"
                              data-tippy-placement="left"
                              onClick={() => this.props.addToWish(product)}
                            >
                              <i className="fa fa-heart-o" />
                              <i className="fa fa-heart" />
                            </Link>
                          </div>

                        </div>

                      </div>

                    ))}
                  </div>

                  {/*=======  End of shop content wrapper  =======*/}
                </div>

              </div>
            </div>
          </div>
          {/*=======  End of shop page area  =======*/}
        </div>
      </div >


    )
  }
}
