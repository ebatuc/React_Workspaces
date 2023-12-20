import React, { Component } from 'react'
import BlogSidebar from '../components/BlogSidebar'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/*=======  breadcrumb wrapper  =======*/}
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Blog</h2>
                </div>
                {/*=======  End of breadcrumb wrapper  =======*/}
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          {/*=======  blog page area  =======*/}
          <div className="blog-page-area">
            <div className="container">
              <div className="row">
                <BlogSidebar />
                <div className="col-lg-9 order-1 order-lg-2">
                  {/*=======  blog post wrapper  =======*/}
                  <div className="blog-post-wrapper">
                    <div className="row">
                      <div className="col-lg-12">
                        {/*=======  single post  =======*/}
                        <div className="single-blog-post">
                          <div className="single-blog-post__image">
                            <a href="/blogdetail">
                              <img
                                src="assets/img/blog/slider/one-1170x770.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="single-blog-post__content">
                            <h3 className="post-title">
                              <a href="/blogdetail">
                                The Difference Between Green Furniture and Sustainable
                                Furniture
                              </a>
                            </h3>
                            <p className="post-meta">
                              By{" "}
                              <a href="/blogdetail" className="post-author">
                                admin
                              </a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="/blogdetail">January 21, 2019</a>
                            </p>
                            <p className="post-excerpt">
                              Many furniture companies claim their products are “green,”
                              a designation usually referring to material sourcing.
                              Maybe their sofa frames are made out of dumpster-sourced
                              scrap metal or their cushions are…
                            </p>
                            <a
                              href="/blogdetail"
                              className="blog-readmore-link"
                            >
                              Read more <i className="fa fa-caret-right" />
                            </a>
                          </div>
                        </div>
                        {/*=======  End of single post  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of blog post wrapper  =======*/}
                  {/*=======  pagination wrapper  =======*/}
                  {/*=======  End of pagination wrapper  =======*/}
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of blog page area  =======*/}
        </div>






      </div>
    )
  }
}
