import React, { Component } from 'react';

class Category extends Component {
    handleCategoryClick = (categoryID) => {
        this.props.onCategorySelect(categoryID);
    };

    render() {
        return (
            <div>

                <ul className="navbar-nav">
                    {this.props.CategoryItems && this.props.CategoryItems.map((category, index) => (
                        <li className="nav-item" key={index}>
                            <button className="nav-link active ms-2" aria-current="page"
                                onClick={() => this.handleCategoryClick(category.id)}>
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>




            </div>


        )
    }

}


export default Category;