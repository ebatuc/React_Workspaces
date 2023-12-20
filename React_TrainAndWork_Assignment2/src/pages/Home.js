import React, { Component } from 'react'
import Slider from '../components/Slider';
import Shop from './Shop';


export default class Home extends Component {
  render() {
    return (
      <div>

        <Slider />
        <Shop products={this.props.products} categories={this.props.categories} brands={this.props.brands}
        getProducts={this.props.getProducts}
        getCategoryName={this.props.getCategoryName}
        getProductsByBrand={this.props.getProductsByBrand}
        addToCart={this.props.addToCart}
        addToWish={this.props.addToWish}/>

      </div>
    )
  }
}
