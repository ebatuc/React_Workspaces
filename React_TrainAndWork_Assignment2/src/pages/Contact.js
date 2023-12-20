import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/*=======  breadcrumb wrapper  =======*/}
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Contact Us</h2>
                </div>
                {/*=======  End of breadcrumb wrapper  =======*/}
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          {/*=======  contact icon text  =======*/}
          <div className="contact-icon-text-area section-space">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/*=======  contact icon text wrapper  =======*/}
                  <div className="contact-icon-text-wrapper">
                    <div className="row">
                      <div className="col-sm-4">
                        {/*=======  single contact icon text  =======*/}
                        <div className="single-contact-icon-text">
                          <div className="single-contact-icon-text__icon">
                            <i className="fa fa-map-marker" />
                          </div>
                          <h3 className="single-contact-icon-text__title">ADDRESS</h3>
                          <p className="single-contact-icon-text__value">
                            Joseph, Canada 10020
                          </p>
                        </div>
                        {/*=======  End of single contact icon text  =======*/}
                      </div>
                      <div className="col-sm-4">
                        {/*=======  single contact icon text  =======*/}
                        <div className="single-contact-icon-text">
                          <div className="single-contact-icon-text__icon">
                            <i className="fa fa-phone" />
                          </div>
                          <h3 className="single-contact-icon-text__title">
                            PHONE NUMBER
                          </h3>
                          <p className="single-contact-icon-text__value">
                            (012) 3456 7890
                          </p>
                        </div>
                        {/*=======  End of single contact icon text  =======*/}
                      </div>
                      <div className="col-sm-4">
                        {/*=======  single contact icon text  =======*/}
                        <div className="single-contact-icon-text">
                          <div className="single-contact-icon-text__icon">
                            <i className="fa fa-envelope" />
                          </div>
                          <h3 className="single-contact-icon-text__title">
                            MAIL ADDRESS
                          </h3>
                          <p className="single-contact-icon-text__value">
                            info@website.com
                          </p>
                        </div>
                        {/*=======  End of single contact icon text  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of contact icon text wrapper  =======*/}
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of contact icon text  =======*/}
          {/*=======  contact form with content  =======*/}
          <div className="contact-form-content-area section-space--contact-form">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/*=======  contact form content wrapper  =======*/}
                  <div className="contact-form-content-wrapper">
                    <div className="row">
                      <div className="col-md-8">
                        {/*=======  contact form wrapper  =======*/}
                        <div className="contact-form-wrapper">
                          <form
                            id="contact-form"
                            action="https://htmldemo.net/robin/robin/assets/php/mail.php"
                            method="post"
                          >
                            <div className="row">
                              <div className="col-lg-4 col-sm-6">
                                <input
                                  type="text"
                                  placeholder="First Name *"
                                  name="customerName"
                                  id="customername"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <input
                                  type="text"
                                  placeholder="Email *"
                                  name="customerEmail"
                                  id="customerEmail"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-4">
                                <input
                                  type="text"
                                  placeholder="Subject"
                                  name="contactSubject"
                                  id="contactSubject"
                                />
                              </div>
                              <div className="col-lg-12">
                                <textarea
                                  cols={30}
                                  rows={10}
                                  placeholder="Message *"
                                  name="contactMessage"
                                  id="contactMessage"
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
                                  SEND A MESSAGE
                                </button>
                              </div>
                            </div>
                          </form>
                          <p className="form-messege" />
                        </div>
                        {/*=======  End of contact form wrapper  =======*/}
                      </div>
                      <div className="col-md-4">
                        {/*=======  contact form content  =======*/}
                        <div className="contact-form-content">
                          <p>
                            Please view our FAQ to find answers to your questions or
                            send us an email for general questions! Due to unexpected
                            volumes, it is taking us a little longer than we would like
                            to respond to emails. Our current email response time is 3
                            business days.
                          </p>
                          <ul className="social-links">
                            <li>
                              <a href="http://www.facebook.com/">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.plus.google.com/">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.linkedin.com/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.twitter.com/">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*=======  End of contact form content  =======*/}
                      </div>
                    </div>
                  </div>
                  {/*=======  End of contact form content wrapper  =======*/}
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of contact form with content  =======*/}
        </div>


      </div>
    )
  }
}
