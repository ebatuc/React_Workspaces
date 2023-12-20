import React, { Component } from 'react'
import BlogSidebar from '../components/BlogSidebar'

export default class BlogDetail extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/*=======  breadcrumb wrapper  =======*/}
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Blog Post</h2>
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
                  {/*=======  blog single post details wrapper  =======*/}
                  <div className="blog-single-post-details-wrapper">
                    <h2 className="post-title">
                      The Difference Between Green Furniture and Sustainable Furniture
                    </h2>
                    <p className="post-meta">
                      By{" "}
                      <a href="/" className="post-author">
                        admin
                      </a>{" "}
                      <span className="separator">|</span>{" "}
                      <a href="/">January 21, 2019</a>
                    </p>
                    <div className="post-thumbnail">
                      <img
                        src="assets/img/blog/slider/five-1170x770.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="post-text-content">
                      <p>
                        Organization: defined culturally as a key characteristic to
                        success and easy living. The art of organization comes easy to
                        some but may be a bit harder for others, especially those who
                        are always busy and never seem to have enough hours in the day.
                        Organization and productivity go hand in hand, each influencing
                        the other. To keep levels of productivity high, you have to be
                        organized and usually, organized individuals are productive.
                        Fortunately, there are many different tactics you can use around
                        your home to keep (at least) this sector of your life in order.
                        Today we’re highlighting four products that make organization a
                        breeze while saving space and maximizing time.
                        <br />
                        <br />
                        To be considered sustainable furniture, it should be high
                        quality and support a lifestyle with reduced energy and resource
                        needs. You can have a piece of furniture made of the most
                        responsibly sourced materials out there, but if it falls apart
                        in a short time and winds up in a landfill, or if it is designed
                        in such a way that it can only fit into a carbon-spewing,
                        resource-gobbling McMansion, it’s not sustainable. When it comes
                        to sustainability, size does matter. Here’s why:
                      </p>
                    </div>
                    <div className="post-share-section">
                      <span>SHARE :</span>
                      <ul className="post-social-icons">
                        <li>
                          <a href="/">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*=======  End of blog single post details wrapper  =======*/}
                  {/*=======  blog related post  =======*/}
                  <div className="blog-related-post-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="blog-details-section-title">Related Posts</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        {/*=======  blog related post wrapper  =======*/}
                        <div className="blog-related-post-wrapper">
                          <div className="row">
                            <div className="col-md-4">
                              {/*=======  single related post  =======*/}
                              <div className="single-blog-post single-blog-post--related">
                                <div className="single-blog-post__image">
                                  <a href="blog-post-left-sidebar.html">
                                    <img
                                      src="assets/img/blog/slider/one-550x360.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="single-blog-post__content">
                                  <h3 className="post-title">
                                    <a href="blog-post-left-sidebar.html">
                                      The Difference Between Green Furniture and
                                      Sustainable Furniture
                                    </a>
                                  </h3>
                                  <p className="post-meta">
                                    By{" "}
                                    <a href="/" className="post-author">
                                      admin
                                    </a>{" "}
                                    <span className="separator">|</span>{" "}
                                    <a href="/">January 21, 2019</a>
                                  </p>
                                </div>
                              </div>
                              {/*=======  End of single related post  =======*/}
                            </div>
                          </div>
                        </div>
                        {/*=======  End of blog related post wrapper  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of blog related post  =======*/}
                  {/*=======  blog comments area  =======*/}
                  <div className="blog-comments-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="blog-details-section-title">Comments (2)</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        {/*=======  blog comments  =======*/}
                        <div className="blog-comments-wrapper">
                          {/*=======  single blog comment  =======*/}
                          <div className="single-blog-comment">
                            <div className="single-blog-comment__image">
                              <img
                                src="assets/img/review/one.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-blog-comment__content">
                              <div className="comment-time">
                                <i className="fa fa-calendar" /> June 7, 2019
                              </div>
                              <p className="comment-text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                          {/*=======  End of single blog comment  =======*/}
                        </div>
                        {/*=======  End of blog comments  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of blog comments area  =======*/}
                  {/*=======  blog comment form area  =======*/}
                  <div className="blog-comment-form-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="blog-details-section-title">Leave a comment</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        {/*=======  comment form wrapper  =======*/}
                        <div className="contact-form-wrapper">
                          <form action="/" method="post">
                            <div className="row">
                              <div className="col-lg-4 col-sm-6">
                                <input
                                  type="text"
                                  placeholder="Your Name (*)"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <input
                                  type="text"
                                  placeholder="Email (*)"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-4">
                                <input type="text" placeholder="Website" />
                              </div>
                              <div className="col-lg-12">
                                <textarea
                                  cols={30}
                                  rows={10}
                                  placeholder="Message *"
                                  required=""
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-lg-12">
                                <button
                                  type="submit"
                                  id="submit"
                                  className="theme-button"
                                >
                                  {" "}
                                  ADD COMMENT
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/*=======  End of comment form wrapper  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of blog comment form area  =======*/}
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
