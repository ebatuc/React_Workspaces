
import React, { Component } from 'react';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            error: null,

        };
    }

    componentDidMount() {
        this.fetchBlogs();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) {
            this.fetchBlogs();
        }
    }

    fetchBlogs() {

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


    render() {
        const { products, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        return (

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.header}</h5>
                                <p className="card-text">{product.desc}</p>
                                <p>Price: {product.price}$</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            
        )

    }
}

export default ProductDetail;
