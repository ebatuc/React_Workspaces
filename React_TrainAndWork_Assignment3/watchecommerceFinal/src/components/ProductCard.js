import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../features/CartSlice'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../features/ProductSlice'

class ProductCard extends Component {

   

    componentDidMount() {
        this.props.fetchProducts();
    }

  


    handleAddToCart = (product) => {
        this.props.addToCart({ product });
        console.log('Cart:', this.props.cart);
    };

    render() {
        return (

            <div className="shop-product-wrap grid gridview-3 row no-gutters">
                {this.props.products.map((product) => (
                    <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div className="mirora-product mb-md--10">
                            <div className="product-img">
                                <img
                                    src={product.image1}
                                    alt="Product"
                                    className="primary-image"
                                />
                                <img
                                    src={product.image2}
                                    alt="Product"
                                    className="secondary-image"
                                />

                            </div>
                            <div className="product-content text-center">
                                <span>{product.brandTitle}</span>
                                <h4>
                                    <a href="product-details.html">{product.title}</a>
                                </h4>
                                <div className="product-price-wrapper">
                                    <span className="money">${product.price}</span>

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
                                    <Link
                                        className="add_cart cart-item action-cart"
                                        title="add-cart"
                                        onClick={() => this.handleAddToCart(product)}
                                    >
                                        <span>Add to cart</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps, { addToCart, fetchProducts })(ProductCard);