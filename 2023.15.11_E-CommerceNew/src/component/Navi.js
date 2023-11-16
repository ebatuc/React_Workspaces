import React, { Component } from 'react';
import Category from "./Category";

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: [],
            selectedCategoryId: null
        }

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

                            </div>
                        </div>
                    </nav >
                </div >





            </div >





        )
    }
}

export default Navi;