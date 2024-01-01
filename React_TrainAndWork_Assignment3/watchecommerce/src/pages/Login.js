import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="main-content-wrapper">
                <div className="login-register-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-md--40">
                                <h2 className="heading-secondary mb--30">Login</h2>
                                <div className="login-reg-box p-4 bg--2">
                                    <form className="form" action="#">
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="username_email">
                                                Username or email address <span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="username_email"
                                                id="username_email"
                                                className="form__input form__input--2"
                                            />
                                        </div>
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="password">
                                                Password <span>*</span>
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form__input form__input--2"
                                            />
                                        </div>
                                        <div className="form__group d-flex align-items-center">
                                            <button type="submit" className="btn btn-5 btn-style-1 color-1">
                                                Login
                                            </button>
                                            <div className="custom-checkbox ml--20">
                                                <input
                                                    type="checkbox"
                                                    name="sessionStore"
                                                    id="sessionStore"
                                                    className="form__checkbox"
                                                />
                                                <label
                                                    htmlFor="sessionStore"
                                                    className="form__checkbox--label"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a href="/" className="forgot-pass">
                                            Forgot your password?
                                        </a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="heading-secondary mb--30">Register</h2>
                                <div className="login-reg-box p-4 bg--2">
                                    <form className="form" action="#">
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="register_email">
                                                Email address <span>*</span>    
                                            </label>
                                            <input
                                                type="text"
                                                name="register_email"
                                                id="register_email"
                                                className="form__input form__input--2"
                                            />
                                        </div>
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="register_password">
                                                Password <span>*</span>
                                            </label>
                                            <input
                                                type="password"
                                                name="register_password"
                                                id="register_password"
                                                className="form__input form__input--2"
                                            />
                                        </div>
                                        <div className="form__group">
                                            <button type="submit" className="btn btn-5 btn-style-2">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
