import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          
          <ProductCard products={this.props.products}
            categories={this.props.categories} brands={this.props.brands}
            getProducts={this.props.getProducts}
            getProductsByBrand={this.props.getProductsByBrand}
            getCategoryName={this.props.getCategoryName}
            addToCart={this.props.addToCart}
            addToWish={this.props.addToWish}
            />
        </div>
      </div>
    )
  }
}
