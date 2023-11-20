import React, { Component } from 'react';

class ProductAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerProducts: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const bannerProducts = data.filter(product => product.banner === 1);
                    this.setState({ bannerProducts: bannerProducts });
                } else {
                    this.setState({ error: 'API data is not in expected format.' });
                }
            })
            .catch(error => {
                console.error('Data import error:', error);
                this.setState({ error: 'data import error' });
            });
    }

    render() {
        const { bannerProducts, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div className="container text-center mb-5">
                <div className="row">
                    <div className="col-sm-6">
                        {bannerProducts.length > 0 && (
                            <div className="card text-bg-dark"
                                >
                                <img src={bannerProducts[0].image} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                        <h5 className="card-title text-bg-dark mb-0">{bannerProducts[0].header}</h5>
                                        <p className="card-text text-bg-dark mt-0">{bannerProducts[0].price}$</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            {bannerProducts.slice(1, 5).map((product, index) => (
                                <div key={index} className="col-8 col-sm-6">
                                    <div className="card text-bg-dark">
                                        <img src={product.image} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <div className="card-body">
                                                <h5 className="card-title text-bg-dark mb-0"><small>{product.header}</small></h5>
                                                <p className="card-text text-bg-dark mb-0"><small>{product.price}$</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductAlbum;
