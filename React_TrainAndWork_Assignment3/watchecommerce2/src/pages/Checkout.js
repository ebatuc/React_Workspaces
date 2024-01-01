import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Checkout extends Component {
    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Checkout</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="current">
                                        <Link to="/Checkout">Checkout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content-wrapper">
                    <div className="checkout-area pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* User Action Start */}
                                    {/* User Action End */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/* Checkout Area Start */}
                                    <div className="checkout-wrapper bg--2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="checkout-title">
                                                    <h2>Billing Details</h2>
                                                </div>
                                                <div className="checkout-form">
                                                    <form action="#" className="form">
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-md-6 mb-sm--30">
                                                                <label htmlFor="billing_fname" className="form__label">
                                                                    First Name
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_fname"
                                                                    id="billing_fname"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                            <div className="form__group col-md-6">
                                                                <label htmlFor="billing_lname" className="form__label">
                                                                    Last Name
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_lname"
                                                                    id="billing_lname"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label
                                                                    htmlFor="billing_country"
                                                                    className="form__label"
                                                                >
                                                                    Country
                                                                </label>
                                                                <select
                                                                    id="billing_country"
                                                                    name="billing_country"
                                                                    className="form__input form__input--2 nice-select"
                                                                >
                                                                    <option value="">Select a country…</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AL">Albania</option>
                                                                    <option value="DZ">Algeria</option>
                                                                    <option value="AR">Argentina</option>
                                                                    <option value="AM">Armenia</option>
                                                                    <option value="AU">Australia</option>
                                                                    <option value="AT">Austria</option>
                                                                    <option value="AZ">Azerbaijan</option>
                                                                    <option value="BH">Bahrain</option>
                                                                    <option value="BD" selected="selected">
                                                                        Bangladesh
                                                                    </option>
                                                                    <option value="BD">Brazil</option>
                                                                    <option value="CN">China</option>
                                                                    <option value="EG">Egypt</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="DE">Germany</option>
                                                                    <option value="HK">Hong Kong</option>
                                                                    <option value="HU">Hungary</option>
                                                                    <option value="IS">Iceland</option>
                                                                    <option value="IN">India</option>
                                                                    <option value="ID">Indonesia</option>
                                                                    <option value="IR">Iran</option>
                                                                    <option value="IQ">Iraq</option>
                                                                    <option value="IE">Ireland</option>
                                                                    <option value="IT">Italy</option>
                                                                    <option value="JP">Japan</option>
                                                                    <option value="KW">Kuwait</option>
                                                                    <option value="MY">Malaysia</option>
                                                                    <option value="MV">Maldives</option>
                                                                    <option value="MX">Mexico</option>
                                                                    <option value="MC">Monaco</option>
                                                                    <option value="NP">Nepal</option>
                                                                    <option value="RU">Russia</option>
                                                                    <option value="KR">South Korea</option>
                                                                    <option value="SS">South Sudan</option>
                                                                    <option value="ES">Spain</option>
                                                                    <option value="LK">Sri Lanka</option>
                                                                    <option value="SD">Sudan</option>
                                                                    <option value="SZ">Swaziland</option>
                                                                    <option value="SE">Sweden</option>
                                                                    <option value="CH">Switzerland</option>
                                                                    <option value="TN">Tunisia</option>
                                                                    <option value="TR">Turkey</option>
                                                                    <option value="UA">Ukraine</option>
                                                                    <option value="AE">United Arab Emirates</option>
                                                                    <option value="GB">United Kingdom (UK)</option>
                                                                    <option value="US">United States (US)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label
                                                                    htmlFor="billing_streetAddress"
                                                                    className="form__label"
                                                                >
                                                                    Street Address
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_streetAddress"
                                                                    id="billing_streetAddress"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label
                                                                    htmlFor="billing_apartment"
                                                                    className="form__label"
                                                                >
                                                                    Apartment, suite, unit etc. (optional)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_apartment"
                                                                    id="billing_apartment"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label htmlFor="billing_city" className="form__label">
                                                                    Town/City
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_city"
                                                                    id="billing_city"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label htmlFor="billing_city" className="form__label">
                                                                    District
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_district"
                                                                    id="billing_district"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label htmlFor="billing_zip" className="form__label">
                                                                    Post/Zip Code
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_zip"
                                                                    id="billing_zip"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-md-6 mb-sm--30">
                                                                <label htmlFor="billing_phone" className="form__label">
                                                                    Phone
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_phone"
                                                                    id="billing_phone"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                            <div className="form__group col-md-6">
                                                                <label htmlFor="billing_email" className="form__label">
                                                                    Email Address
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="billing_email"
                                                                    id="billing_email"
                                                                    className="form__input form__input--2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30"></div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <div className="ship-box-info hide-in-default mt--30">
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-md-6 mb-sm--30">
                                                                            <label
                                                                                htmlFor="shipping_fname"
                                                                                className="form__label"
                                                                            >
                                                                                First Name
                                                                                <span>*</span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_fname"
                                                                                id="shipping_fname"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                        <div className="form__group col-md-6">
                                                                            <label
                                                                                htmlFor="shipping_lname"
                                                                                className="form__label"
                                                                            >
                                                                                Last Name <span>*</span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_lname"
                                                                                id="shipping_lname"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_company"
                                                                                className="form__label"
                                                                            >
                                                                                Company
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_company"
                                                                                id="shipping_company"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_country"
                                                                                className="form__label"
                                                                            >
                                                                                Country
                                                                            </label>
                                                                            <select
                                                                                id="shipping_country"
                                                                                name="shipping_country"
                                                                                className="form__input form__input--2 nice-select"
                                                                            >
                                                                                <option value="">Select a country…</option>
                                                                                <option value="AF">Afghanistan</option>
                                                                                <option value="AL">Albania</option>
                                                                                <option value="DZ">Algeria</option>
                                                                                <option value="AR">Argentina</option>
                                                                                <option value="AM">Armenia</option>
                                                                                <option value="AU">Australia</option>
                                                                                <option value="AT">Austria</option>
                                                                                <option value="AZ">Azerbaijan</option>
                                                                                <option value="BH">Bahrain</option>
                                                                                <option value="BD" selected="selected">
                                                                                    Bangladesh
                                                                                </option>
                                                                                <option value="BD">Brazil</option>
                                                                                <option value="CN">China</option>
                                                                                <option value="EG">Egypt</option>
                                                                                <option value="FR">France</option>
                                                                                <option value="DE">Germany</option>
                                                                                <option value="HK">Hong Kong</option>
                                                                                <option value="HU">Hungary</option>
                                                                                <option value="IS">Iceland</option>
                                                                                <option value="IN">India</option>
                                                                                <option value="ID">Indonesia</option>
                                                                                <option value="IR">Iran</option>
                                                                                <option value="IQ">Iraq</option>
                                                                                <option value="IE">Ireland</option>
                                                                                <option value="IT">Italy</option>
                                                                                <option value="JP">Japan</option>
                                                                                <option value="KW">Kuwait</option>
                                                                                <option value="MY">Malaysia</option>
                                                                                <option value="MV">Maldives</option>
                                                                                <option value="MX">Mexico</option>
                                                                                <option value="MC">Monaco</option>
                                                                                <option value="NP">Nepal</option>
                                                                                <option value="RU">Russia</option>
                                                                                <option value="KR">South Korea</option>
                                                                                <option value="SS">South Sudan</option>
                                                                                <option value="ES">Spain</option>
                                                                                <option value="LK">Sri Lanka</option>
                                                                                <option value="SD">Sudan</option>
                                                                                <option value="SZ">Swaziland</option>
                                                                                <option value="SE">Sweden</option>
                                                                                <option value="CH">Switzerland</option>
                                                                                <option value="TN">Tunisia</option>
                                                                                <option value="TR">Turkey</option>
                                                                                <option value="UA">Ukraine</option>
                                                                                <option value="AE">United Arab Emirates</option>
                                                                                <option value="GB">United Kingdom (UK)</option>
                                                                                <option value="US">United States (US)</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_streetAddress"
                                                                                className="form__label"
                                                                            >
                                                                                Street Address
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_streetAddress"
                                                                                id="shipping_streetAddress"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_apartment"
                                                                                className="form__label"
                                                                            >
                                                                                Apartment, suite, unit etc. (optional)
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_apartment"
                                                                                id="shipping_apartment"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_city"
                                                                                className="form__label"
                                                                            >
                                                                                Town/City
                                                                                <span>*</span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_city"
                                                                                id="shipping_city"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_district"
                                                                                className="form__label"
                                                                            >
                                                                                Districtg
                                                                                <span>*</span>
                                                                            </label>
                                                                            <select
                                                                                id="shipping_district"
                                                                                name="shipping_district"
                                                                                className="form__input form__input--2 nice-select"
                                                                            >
                                                                                <option value="">Select a District…</option>
                                                                                <option>BARISAL</option>
                                                                                <option>BHOLA</option>
                                                                                <option>BANDARBAN</option>
                                                                                <option>BRAHMANBARIA</option>
                                                                                <option>CHANDPUR</option>
                                                                                <option>CHITTAGONG</option>
                                                                                <option>COMILLA</option>
                                                                                <option>COX'S BAZAR</option>
                                                                                <option>DHAKA</option>
                                                                                <option>FARIDPUR</option>
                                                                                <option>FENI</option>
                                                                                <option>GAZIPUR</option>
                                                                                <option>GOPALGANJ</option>
                                                                                <option>JAMALPUR</option>
                                                                                <option>KHAGRACHHARI</option>
                                                                                <option>KISHOREGONJ</option>
                                                                                <option>LAKSHMIPU</option>
                                                                                <option>RMADARIPUR</option>
                                                                                <option>MUNSHIGANJ</option>
                                                                                <option>MYMENSINGH</option>
                                                                                <option>NARAYANGANJ</option>
                                                                                <option>NARSINGDI</option>
                                                                                <option>NETRAKONA</option>
                                                                                <option>NOAKHALI</option>
                                                                                <option>RANGAMATI </option>
                                                                                <option>RAJBARI</option>
                                                                                <option>SHARIATPUR</option>
                                                                                <option>SHERPUR</option>
                                                                                <option>TANGAIL</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-12">
                                                                            <label
                                                                                htmlFor="shipping_zip"
                                                                                className="form__label"
                                                                            >
                                                                                Post/Zip Code
                                                                                <span>*</span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_zip"
                                                                                id="shipping_zip"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-row mb--30">
                                                                        <div className="form__group col-md-6 mb-sm--30">
                                                                            <label
                                                                                htmlFor="shipping_phone"
                                                                                className="form__label"
                                                                            >
                                                                                Phone
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="shipping_phone"
                                                                                id="shipping_phone"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                        <div className="form__group col-md-6">
                                                                            <label
                                                                                htmlFor="shipping_email"
                                                                                className="form__label"
                                                                            >
                                                                                Email Address
                                                                                <span>*</span>
                                                                            </label>
                                                                            <input
                                                                                type="email"
                                                                                name="shipping_email"
                                                                                id="shipping_email"
                                                                                className="form__input form__input--2"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mt-md--30">
                                                <div className="order-details">
                                                    <h3 className="heading-tertiary">Your Order</h3>
                                                    <div className="order-table table-content table-responsive mb--30">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Aliquam lobortis est <strong>x1</strong>
                                                                    </td>
                                                                    <td>$80.00</td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="cart-subtotal">
                                                                    <th>Cart Subtotal</th>
                                                                    <td>$56.00</td>
                                                                </tr>
                                                                <tr className="shipping">
                                                                    <th>Shipping</th>
                                                                    <td>$56.00</td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                    <th>Order Total</th>
                                                                    <td>
                                                                        <span className="order-total-ammount">$56.00</span>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                    <div className="checkout-payment">
                                                        <form action="#" className="payment-form">
                                                            <div className="payment-btn-group">
                                                                <button type="submit" className="btn btn-style-3">
                                                                    Place Order
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Checkout Area End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        )
    }
}
