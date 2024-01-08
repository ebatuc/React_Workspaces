import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">About Us</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="current">
                                        <a href="shop.html">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content-wrapper">
                    <div className="about-area bg--dark-3 mt--40 mt-sm--30">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters align-items-center">
                                <div className="col-xl-6">
                                    <div className="img-box text-center">
                                        <img src="assets/img/about/about-us-img1.jpg" alt="about" />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-10 offset-1">
                                            <div className="about-text text-center">
                                                <h2 className="heading-secondary mb--40 mb-sm--30">About Us</h2>
                                                <p className="mb--40 mb-sm--30">
                                                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                                                    velit esse molestie consequat, vel illum dolore eu feugiat
                                                    nulla facilisis at vero eros et accumsan et iusto odio
                                                    dignissim qui blandit praesent luptatum zzril delenit augue
                                                    duis dolore te feugait nulla facilisi. Nam liber tempor cum
                                                    soluta nobis eleifend option congue nihil imperdiet doming id
                                                    quod mazim placerat facer possim assum. Typi non habent
                                                    claritatem insitam, est usus legentis in iis qui facit eorum
                                                    claritatem.
                                                </p>
                                                <div className="about-btn-group text-center">
                                                    <a href="portfolio.html" className="btn btn-style-3">
                                                        view work
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fact-area" id="fun-fact">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="fact">
                                        <div className="fact__icon">
                                            <img src="assets/img/icons/about-us-icon1.png" alt="about icon" />
                                        </div>
                                        <div className="fact__content">
                                            <h3>
                                                <span className="counter" data-count={2169}>
                                                    0
                                                </span>
                                            </h3>
                                            <p>HAPPY CUSTOMERS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="fact">
                                        <div className="fact__icon">
                                            <img src="assets/img/icons/about-us-icon2.png" alt="about icon" />
                                        </div>
                                        <div className="fact__content">
                                            <h3>
                                                <span className="counter" data-count={"869"}>
                                                    0
                                                </span>
                                            </h3>
                                            <p>AWARDS WON</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="fact">
                                        <div className="fact__icon">
                                            <img src="assets/img/icons/about-us-icon3.png" alt="about icon" />
                                        </div>
                                        <div className="fact__content">
                                            <h3>
                                                <span className="counter" data-count={689}>
                                                    0
                                                </span>
                                            </h3>
                                            <p>HOURS WORKED</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="fact">
                                        <div className="fact__icon">
                                            <img src="assets/img/icons/about-us-icon4.png" alt="about icon" />
                                        </div>
                                        <div className="fact__content">
                                            <h3>
                                                <span className="counter" data-count={2500}>
                                                    0
                                                </span>
                                            </h3>
                                            <p>COMPLETE PROJECTS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-area bg--dark-3">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters align-items-center">
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-sm-9 offset-sm-2 col-10 offset-1">
                                            <div className="skill-progress">
                                                <h2 className="heading-secondary heading-secondary--2 mb--40">
                                                    WE HAVE SKILLS TO SHOW
                                                </h2>
                                                <div className="skill-progress__single">
                                                    <span className="skill-progress__title">html/css</span>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "90%" }}
                                                            aria-valuenow={90}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <span>90%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-progress__single">
                                                    <span className="skill-progress__title">wordpress</span>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "85%" }}
                                                            aria-valuenow={85}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <span>85%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-progress__single">
                                                    <span className="skill-progress__title">typhography</span>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "70%" }}
                                                            aria-valuenow={70}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <span>70%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-progress__single">
                                                    <span className="skill-progress__title">branding</span>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "95%" }}
                                                            aria-valuenow={95}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <span>95%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="img-box text-center">
                                        <img src="assets/img/about/about-us-img2.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
