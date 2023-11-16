
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


            /*
                        <div className="row mx-0">
                            <div className="col-md-9 animate-box" data-animate-effect="fadeIn">
            
            
                                <div className="container-fluid pb-4 pt-4 paddding">
            
                                    {products.map((product, index) => (
                                        <div key={index} className="row pb-4" >
                                            <div className="col-md-5">
                                                <div className="fh5co_hover_news_img">
                                                    <div className="fh5co_news_img">
                                                        <img src={product.image} alt="" />
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className="col-md-7 animate-box">
                                                <h3 className="fh5co_magna py-2" onClick={(e) => e.preventDefault()}>
                                                    {product.header}
                                                </h3>
                                                <a href="test" className="fh5co_mini_time py-3">
                                                    {product.author} - {product.date}
                                                </a>
                                                <div className="fh5co_consectetur">{product.desc}</div>
            
                                                <div className="fh5co_consectetur">
                                                    <i className="fa fa-heart-o"></i> {product.favNum}
                                                </div>
            
                                                <div className="fh5co_consectetur">
                                                    <i className="fa fa-clock-o"></i> {product.date}
                                                </div>
            
                                                <div className="fh5co_consectetur">
            
                                                    <div className="clearfix"></div>
                                                </div>
            
            
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                <div className="col-md-12 animate-box" data-animate-effect="fadeInRight">
                                    <div>
                                        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
                                    </div>
                                    <div className="clearfix"></div>
            
                                    <div>
                                        <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Popüler
                                        </div>
                                    </div>
            
                                </div>
                            </div>
            
                        </div>
            
            */
        )

    }
}

export default ProductDetail;
