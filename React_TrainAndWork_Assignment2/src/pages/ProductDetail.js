import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/*=======  breadcrumb wrapper  =======*/}
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Shop</h2>
                </div>
                {/*=======  End of breadcrumb wrapper  =======*/}
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          {/*=======  single product slider details area  =======*/}
          <div className="single-product-slider-details-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  {/*=======  product details slider area  =======*/}
                  <div className="product-details-slider-area product-details-slider-area--side-move">
                    <div className="product-badge-wrapper">
                      <span className="hot">Hot</span>
                    </div>
                    <div className="row g-2">
                      <div className="col-md-9 order-1 order-md-2 position-relative">
                        <div className="big-image-wrapper">
                          <div className="enlarge-icon">
                            <a
                              className="btn-zoom-popup"
                              href="/"
                              data-tippy="Click to enlarge"
                              data-tippy-placement="left"
                              data-tippy-inertia="true"
                              data-tippy-animation="shift-away"
                              data-tippy-delay={50}
                              data-tippy-arrow="true"
                              data-tippy-theme="sharpborder"
                            >
                              <i className="pe-7s-expand1" />
                            </a>
                          </div>
                          <div
                            className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider"
                            data-slick-setting='{
                                      "slidesToShow": 1,
                                      "slidesToScroll": 1,
                                      "arrows": false,
                                      "autoplay": false,
                                      "autoplaySpeed": 5000,
                                      "fade": true,
                                      "speed": 500,
                                      "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                                      "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
                                  }'
                            data-slick-responsive='[
                                      {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
                                      {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
                                      {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
                                  ]'
                          >
                            <div className="single-image">
                              <img
                                src="assets/img/products/big1-1.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*=======  End of product details slider area  =======*/}
                </div>
                <div className="col-lg-6">
                  {/*=======  product details description area  =======*/}
                  <div className="product-details-description-wrapper">
                    <h2 className="item-title">Atelier Ottoman Takumi Series</h2>
                    <p className="price">
                      <span className="main-price discounted">$360.00</span>
                      <span className="discounted-price">$300.00</span>
                    </p>
                    <p className="description">
                      Upholstered velvet ottoman with antique stud detailing. Invite
                      restrained glamour and on-trend colour into your design scheme
                      with the Eichholtz Ponti Ottoman. Inspired by the neo-classical
                      influences of Italian icon, Gio Ponti, this contemporary ottoman
                      collection is presented in a choice of velvet and linen
                      colourways.
                    </p>
                    <div className="product-color">
                      <span className="product-details-title">COLOR: </span>
                      <ul>
                        <li>
                          <a
                            className="active"
                            href="/"
                            data-tippy="Black"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay={50}
                            data-tippy-arrow="true"
                            data-tippy-theme="roundborder"
                          >
                            <span className="color-picker black" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            data-tippy="Blue"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay={50}
                            data-tippy-arrow="true"
                            data-tippy-theme="roundborder"
                          >
                            <span className="color-picker blue" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            data-tippy="Brown"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay={50}
                            data-tippy-arrow="true"
                            data-tippy-theme="roundborder"
                          >
                            <span className="color-picker brown" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pro-qty d-inline-block">
                      <input type="text" defaultValue={1} />
                    </div>
                    <div className="add-to-cart-btn d-inline-block">
                      <button className="theme-button theme-button--alt">
                        ADD TO CART
                      </button>
                    </div>
                    <div className="quick-view-other-info">
                      <div className="other-info-links">
                        <a href="/">
                          <i className="fa fa-heart-o" /> ADD TO WISHLIST
                        </a>
                        <a href="/">
                          <i className="fa fa-exchange" /> COMPARE
                        </a>
                      </div>
                      <div className="product-brand">
                        <a href="shop-left-sidebar.html">
                          <img
                            src="assets/img/brands/brand-2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <table>
                        <tbody>
                          <tr className="single-info">
                            <td className="quickview-title">Brand: </td>
                            <td className="quickview-value">BELLE NETWORK</td>
                          </tr>
                          <tr className="single-info">
                            <td className="quickview-title">SKU: </td>
                            <td className="quickview-value">12345</td>
                          </tr>
                          <tr className="single-info">
                            <td className="quickview-title">Categories: </td>
                            <td className="quickview-value">
                              <a href="/">Decor</a>,<a href="/">Living Room</a>,
                              <a href="/">Furniture</a>
                            </td>
                          </tr>
                          <tr className="single-info">
                            <td className="quickview-title">Tags: </td>
                            <td className="quickview-value">
                              <a href="/">Decor</a>,<a href="/">Light</a>
                            </td>
                          </tr>
                          <tr className="single-info">
                            <td className="quickview-title">Share on: </td>
                            <td className="quickview-value">
                              <ul className="quickview-social-icons">
                                <li>
                                  <a href="/">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i className="fa fa-pinterest" />
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*=======  End of product details description area  =======*/}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
