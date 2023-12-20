import React, { Component } from 'react'

export default class ProductSide extends Component {
    render() {
        return (
            <div className="col-lg-3 order-2 order-lg-1">
                {/*=======  shop sidebar wrapper  =======*/}
                <div className="shop-sidebar-wrapper">
                    {/*=======  single sidebar widget  =======*/}
                    <div className="single-sidebar-widget">
                        <h2 className="single-sidebar-widget__title">Filter By Price</h2>
                        <div className="sidebar-price">
                            <div id="price-range" />
                            <div className="output-wrapper">
                                <input
                                    type="text"
                                    id="price-amount"
                                    className="price-amount"
                                    readOnly=""
                                />
                            </div>
                        </div>
                    </div>
                    {/*=======  End of single sidebar widget  =======*/}
                    {/*=======  single sidebar widget  =======*/}
                    <div className="single-sidebar-widget">
                        <h2 className="single-sidebar-widget__title">
                            Product Categories
                        </h2>
                        {this.props.categories?.map((category, index) => (
                            <ul key={index}
                                className="single-sidebar-widget__dropdown mt-3"
                                id="single-sidebar-widget__dropdown"
                            >
                                <li className="has-children">
                                    <div className="link_list_hov " onClick={() => this.props.getProducts(category.id)}>{category?.name}</div>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="single-sidebar-widget">
                        <h2 className="single-sidebar-widget__title">Filter By Brand</h2>
                        {this.props.brands?.map((brand, index) =>
                            <ul key={index} className="single-sidebar-widget__dropdown mt-3">
                                <li>
                                    <div className='link_list_hov' onClick={() => this.props.getProductsByBrand(brand.id)}>{brand?.name}</div>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
