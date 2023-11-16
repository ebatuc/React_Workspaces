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
      selectedCategoryId: null,
      selectedProduct: null,
      showModal: false,
    };
  }

  handleCategorySelect = (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
  };



  render() {
    return (
      <div className="App bg-dark">
        <Navi onCategorySelect={this.handleCategorySelect} />
        <Category
          onCategorySelect={this.handleCategorySelect} />
        <div class="container text-center">
          <div class="row-1">
            <ProductAlbum onProductClick={this.openModal} />
          </div>
          <div class="row-2">
            <ProductDetail selectedCategory={this.state.selectedCategoryId} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
