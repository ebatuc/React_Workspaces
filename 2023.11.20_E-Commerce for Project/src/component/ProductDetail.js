
import React, { Component } from 'react';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedProducts: [],
            error: null,

        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) {
            this.fetchProducts();
        }
    }

    fetchProducts() {

        const apiUrl = this.props.selectedCategory
            ? `http://localhost:3000/products?categoryId=${this.props.selectedCategory}`
            : 'http://localhost:3000/products';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    this.setState({ products: data });
                } else {
                    this.setState({ error: 'API data is not in expected format.' });
                }
            })
            .catch((error) => {
                console.error('Data import error:', error);
                this.setState({ error: 'data import error' });
            });
    }

    handleFav = (productId) => {
        if (this.state.selectedProducts.includes(productId)) {
            return;
        }
        const updatedProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                const updatedProduct = { ...product, favNum: product.favNum + 1 };
                this.updateProductInDatabase(updatedProduct);
                return updatedProduct;
            }
            return product;
        });
        this.setState((prevState) => ({
            products: updatedProducts,
            selectedProducts: [...prevState.selectedProducts, productId],
        }));
    };

    updateProductInDatabase = (updatedProduct) => {
        fetch(`http://localhost:3000/products/${updatedProduct.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Favorite Number Has Been Updated:', data);
            })
            .catch(error => console.error('Favorite Number Could Not Be Updated:', error));
    };



    render() {
        const { products, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        return (

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product, index) => (
                    <div className="col" key={index} onClick={() => this.props.onProductClick(product)}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.header}</h5>
                                <p className="card-text">{product.desc}</p>
                                <p>Price: {product.price}$</p>
                                <p>Favorites: {product.favNum} ♥</p>
                                <button className='btn btn-success' onClick={() => this.props.addToCart(product)}>Add to Cart</button>
                                <button 
                                 disabled={this.state.selectedProducts.includes(product.id)}
                                className='btn btn-danger ms-1' onClick={() => this.handleFav(product.id)} >♥</button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>



        )

    }
}

export default ProductDetail;
