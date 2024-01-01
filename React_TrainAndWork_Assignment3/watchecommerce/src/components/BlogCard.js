import React, { Component } from 'react'

export default class BlogCard extends Component {
    render() {
        return (

            <div className="col-12 mb--30">
                <article className="post listview sticky single-post format-image">
                    <div className="post-media">
                        <div className="image">
                            <a href="blog-details-image.html">
                                <img src="assets/img/blog/blog1.jpg" alt="blog" />
                            </a>
                        </div>
                    </div>
                    <div className="post-info">
                        <header className="entry-header">
                            <div className="entry-meta">
                                <span className="post-author">
                                    <span className="post-by">Post By:</span>
                                    admin
                                </span>
                                <span className="post-date">Feb 02 2016</span>
                            </div>
                            <h2 className="post-title">
                                <a href="blog-details-image.html">Blog Image Post</a>
                            </h2>
                        </header>
                        <div className="post-content">
                            <p>
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                molestie consequat, vel illum dolore eu feugiat nulla facilisis
                            </p>
                        </div>
                        <a
                            href="blog-details-image.html"
                            className="btn btn-read-more btn-style-2"
                        >
                            Continue Reading
                        </a>
                    </div>
                </article>
            </div>

        )
    }
}
