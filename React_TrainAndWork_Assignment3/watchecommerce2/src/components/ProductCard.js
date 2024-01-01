import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { addToCart } from '../features/CartSlice'

export default class ProductCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            const products = response.data;

            // brands verisini çek
            const brandsResponse = await axios.get('http://localhost:3000/brands');
            const brands = brandsResponse.data;

            // brandId'ye göre marka başlıklarını eşleştir
            const updatedProducts = products.map(product => ({
                ...product,
                brandTitle: brands.find(brand => brand.id === product.brandId)?.title,
            }));

            this.setState({ products: updatedProducts });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    

    handleAddToCart = (product) => {
        this.props.addToCart({ product });
    };

    render() {
        return (

            <div className="shop-product-wrap grid gridview-3 row no-gutters">
                {this.state.products.map((product) => (
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
                    </div>
                ))}
            </div>

        )
    }
}
