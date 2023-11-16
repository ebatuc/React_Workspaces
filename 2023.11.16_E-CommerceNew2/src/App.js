import './App.css';
import React, { Component } from "react";
import Navi from "./component/Navi"
import Category from "./component/Category"
import ProductAlbum from "./component/ProductAlbum"
import ProductDetail from './component/ProductDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stableCategory: "",
      products: [],
      cart: [],
      selectedCategoryId: null,
      selectedProduct: null,
      showModal: false,
    };
  }

  addToCart = (product) => {
    let newCart = [...this.state.cart];

    var addedItem = newCart.find((e) => e.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  };

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((e) => e.product.id !== product.id)
    this.setState({ cart: newCart });
  };

  clearCart = () => {
    this.setState({ cart: [] })
  }

  calculateCartTotal = () => {
    let total = 0;
    for (const cartItem of this.state.cart) {
      total += cartItem.product.price * cartItem.quantity;
    }
    return total;
  };

  handleCategorySelect = (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
  };

  render() {
    return (
      <div className="App bg-dark">
        <Navi
          onCategorySelect={this.handleCategorySelect}
          cart={this.state.cart}
          removeToCart={this.removeToCart}
          clearCart={this.clearCart}
          calculateCartTotal={this.calculateCartTotal}
        />
        <Category onCategorySelect={this.handleCategorySelect} />
        <div className="container text-center">
          <div className="row-1">
            <ProductAlbum onProductClick={this.openModal} />
          </div>
          <div className="row-2">
            <ProductDetail
              addToCart={this.addToCart}
              albums={this.state.products}
              selectedCategory={this.state.selectedCategoryId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
