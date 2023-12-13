import React, { Component } from 'react';
import '../Navi.css';
import Category from "./Category";

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: [],
            selectedCategoryId: null,
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
                <div >
                    {/* //! Edit Categories in navbar */}
                    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
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

                                {/* ************************************************************************************************************************************************** */}

                                {/* //! Edit Cart and My orders in navbar */}
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                                    <li className="nav-item borderline" >
                                        <button className="nav-link active ms-2  me-2"  aria-current="page"
                                        >
                                           <a  href=" #myOrder"> My Orders</a>
                                        </button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cart - [{this.props.cart.length}]
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end mt-1 borderset bg-body-tertiary">
                                            {this.props.cart.map((cartItem) => (
                                                <div key={cartItem.product.id}>
                                                    <li><p className="dropdown-item" href="#">{cartItem.product.header}
                                                        [{cartItem.quantity}]</p>
                                                    </li>
                                                </div>
                                            ))}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><p className="dropdown-item" >Total: {this.props.calculateCartTotal()}$</p></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item fw-bold" href="#myOrder">Proceed To Checkout</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item text-danger " href="#" onClick={this.props.clearCart}>Clear All</a></li>
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
