import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-area">
  <div className="footer-navigation-area">
    <div className="container wide">
      <div className="row">
        <div className="col-xl-4 col-custom-xl-6 col-lg-6">
          <div className="row">
            <div className="col-6 col-sm-4">
              <div className="footer-widget">
                <h4 className="footer-widget__title">ABOUT US</h4>
                <nav className="footer-widget__navigation">
                  <ul>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Newsletter Sign Up</a>
                    </li>
                    <li>
                      <a href="/">History</a>
                    </li>
                    <li>
                      <a href="/">Brands</a>
                    </li>
                    <li>
                      <a href="/">Press Office</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-6 col-sm-4">
              <div className="footer-widget">
                <h4 className="footer-widget__title">SERVICES</h4>
                <nav className="footer-widget__navigation">
                  <ul>
                    <li>
                      <a href="/">Price promise</a>
                    </li>
                    <li>
                      <a href="/">How to order</a>
                    </li>
                    <li>
                      <a href="/">Returns</a>
                    </li>
                    <li>
                      <a href="/">UK delivery</a>
                    </li>
                    <li>
                      <a href="/">International delivery</a>
                    </li>
                    <li>
                      <a href="/">Want it? Can’t find it?</a>
                    </li>
                    <li>
                      <a href="/">Customer feedback</a>
                    </li>
                    <li>
                      <a href="/">Measuring Advice</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-6 col-sm-4">
              <div className="footer-widget">
                <h4 className="footer-widget__title">USEFUL LINKS</h4>
                <nav className="footer-widget__navigation">
                  <ul>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Returns</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">Latest News</a>
                    </li>
                    <li>
                      <a href="/">Our Sitemap</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-custom-xl-6 col-lg-6">
          <div className="row">
            <div className="col-6 col-sm-4">
              <div className="footer-widget">
                <h4 className="footer-widget__title">WORK WITH US</h4>
                <nav className="footer-widget__navigation">
                  <ul>
                    <li>
                      <a href="/">Careers</a>
                    </li>
                    <li>
                      <a href="/">Affiliates</a>
                    </li>
                    <li>
                      <a href="/">Travel Scholarship</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-6 col-sm-4">
              <div className="footer-widget">
                <h4 className="footer-widget__title">GIFTS</h4>
                <nav className="footer-widget__navigation">
                  <ul>
                    <li>
                      <a href="/">Gift vouchers</a>
                    </li>
                    <li>
                      <a href="/">Return customers</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-6 col-sm-4">
              <div className="footer-widget">
                <h4 className="footer-widget__title">CATEGORIES</h4>
                <nav className="footer-widget__navigation">
                  <ul>
                    <li>
                      <a href="/">Living Room</a>
                    </li>
                    <li>
                      <a href="/">Kitchen</a>
                    </li>
                    <li>
                      <a href="/">Bathroom</a>
                    </li>
                    <li>
                      <a href="/">Outdoors</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-custom-xl-6 col-lg-6">
          <div className="footer-widget footer-widget--two">
            <h4 className="footer-widget__title">10% OFF YOUR FIRST ORDER</h4>
            <p className="footer-widget__text">
              Join our community and be the first to know about offers, new
              collections and interior trends.
            </p>
            <div className="newsletter-form-area">
              <form id="mc-form" className="mc-form">
                <div className="footer-widget__newsletter-form">
                  <input type="email" placeholder="Your Email" required="" />
                  <button type="submit">SUBSCRIBE US</button>
                </div>
              </form>
            </div>
            {/* mailchimp-alerts Start */}
            <div className="mailchimp-alerts">
              <div className="mailchimp-submitting" />
              {/* mailchimp-submitting end */}
              <div className="mailchimp-success" />
              {/* mailchimp-success end */}
              <div className="mailchimp-error" />
              {/* mailchimp-error end */}
            </div>
            {/* mailchimp-alerts end */}
          </div>
          <div className="footer-widget footer-widget--two">
            <span className="footer-widget__text footer-widget__text--two">
              Follow us
            </span>
            <ul className="footer-widget__social-links">
              <li>
                <a href="/" title="Facebook">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="/" title="Twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/" title="LinkedIn">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="/" title="LinkedIn">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="/" title="Youtube">
                  <i className="fa fa-youtube-play" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-payment-logo">
            <img
              src="assets/img/icons/payments.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright-area">
    <div className="container wide">
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            copyright © 2022 <a href="/">Robin</a>. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    )
  }
}
