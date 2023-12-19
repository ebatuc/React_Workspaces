import React, { Component } from 'react'

export default class BlogSidebar extends Component {
  render() {
    return (
      
        <div className="col-lg-3 order-2 order-lg-1">
      {/*=======  blog sidebar  =======*/}
      <div className="blog-sidebar-wrapper">
        {/*=======  single sidebar widget  =======*/}
        <div className="single-sidebar-widget single-sidebar-widget--extra-space">
          <h2 className="single-sidebar-widget__title single-sidebar-widget__title--extra-space">
            Search
          </h2>
          <div className="sidebar-search">
            <form action="/">
              <input type="search" placeholder="Search..." />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
        {/*=======  End of single sidebar widget  =======*/}
        {/*=======  single sidebar widget  =======*/}
        <div className="single-sidebar-widget">
          <h2 className="single-sidebar-widget__title">Recent Posts</h2>
          <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
            <li>
              <a href="/blogdetail">
                The Difference Between Green Furniture and Sustainable
                Furniture
              </a>
            </li>
          </ul>
        </div>
        {/*=======  End of single sidebar widget  =======*/}
        {/*=======  single sidebar widget  =======*/}
        <div className="single-sidebar-widget">
          <h2 className="single-sidebar-widget__title">Recent Comments</h2>
          <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--comments">
            <li>
              <span className="commenter">Alisa</span> on{" "}
              <a href="/blogdetail">
                {" "}
                The Difference Between Green Furniture and Sustainable
                Furniture
              </a>
            </li>
          </ul>
        </div>
        {/*=======  End of single sidebar widget  =======*/}
        {/*=======  single sidebar widget  =======*/}
        <div className="single-sidebar-widget">
          <h2 className="single-sidebar-widget__title">Archives</h2>
          <ul className="single-sidebar-widget__dropdown">
            <li>
              <a href="/blogdetail">July 2019</a>
            </li>
          </ul>
        </div>
        {/*=======  End of single sidebar widget  =======*/}
        {/*=======  single sidebar widget  =======*/}
        <div className="single-sidebar-widget">
          <h2 className="single-sidebar-widget__title">Categories</h2>
          <ul className="single-sidebar-widget__dropdown">
            <li>
              <a href="/blogdetail">Furniture</a>
            </li>
          </ul>
        </div>
        {/*=======  End of single sidebar widget  =======*/}
      </div>
      {/*=======  End of blog sidebar  =======*/}
    </div>
    )
  }
}
