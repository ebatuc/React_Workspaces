import React, { Component } from 'react';
import Category from "./Category";

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: [],
            selectedCategoryId: null
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/category")
            .then(response => response.json())
            .then(data => {
                this.setState({ categoryData: data })
            })
            .catch(error => console.error("Data insert error:", error))
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
                        <div className="container-fluid">
                            <a className="navbar-brand font-weight-bold" href="#">Everything in One</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse ms-3" id="navbarNav">
                                <Category
                                    CategoryItems={this.state.categoryData}
                                    onCategorySelect={this.props.onCategorySelect}
                                />
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cart - [{this.props.cart.length}]
                                        </a>
                                        <ul className="dropdown-menu">
                                            {this.props.cart.map((cartItem) => (
                                                <div key={cartItem.product.id}>
                                                    <li><a className="dropdown-item" href="#">{cartItem.product.header}  
                                                    [{cartItem.quantity}]</a>
                                                    </li>
                                                </div>
                                            ))}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Total: {this.props.calculateCartTotal()}$</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#" onClick={this.props.clearCart}>Clear All</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navi;
