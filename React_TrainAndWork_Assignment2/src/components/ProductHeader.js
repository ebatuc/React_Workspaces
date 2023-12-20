import React, { Component } from 'react'

export default class ProductHeader extends Component {
    render() {
        return (
            <div className="shop-header">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-12">
                        {/*=======  header left content  =======*/}
                        <div className="shop-header__left">
                            <p className="result-text d-inline-block mb-0">
                                Showing 1–9 of 50 results
                            </p>
                            <div className="view-mode-icons d-inline-block">
                                <a
                                    href="/"
                                    className="active"
                                    data-tippy="Grid"
                                    data-target="grid"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay={50}
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                >
                                    <i className="fa fa-th" />
                                </a>
                                <a
                                    href="/"
                                    data-target="list"
                                    data-tippy="List"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay={50}
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                >
                                    <i className="fa fa-list" />
                                </a>
                            </div>
                        </div>
                        {/*=======  End of header left content  =======*/}
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="shop-header__right d-flex justify-content-start justify-content-sm-end align-items-center">
                            <div className="grid-view-changer" id="grid-view-changer">
                                <a
                                    href="/"
                                    id="grid-view-change-trigger"
                                    data-tippy="View Options"
                                    data-target="grid"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay={50}
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                >
                                    <i className="fa fa-eye" />
                                </a>
                                <div
                                    className="grid-view-changer__menu"
                                    id="grid-view-changer__menu"
                                >
                                    <a href="/" data-target="two-column">
                                        2
                                    </a>
                                </div>
                            </div>
                            <div className="sort-by-dropdown">
                                <select
                                    name="sort-by"
                                    id="sort-by"
                                    className="nice-select"
                                >
                                    <option value={0}>Sort By Popularity</option>
                                    <option value={0}>Sort By Average Rating</option>
                                    <option value={0}>Sort By Newness</option>
                                    <option value={0}>Sort By Price: Low to High</option>
                                    <option value={0}>Sort By Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
