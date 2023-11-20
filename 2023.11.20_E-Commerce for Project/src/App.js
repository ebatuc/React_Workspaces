import './App.css';
import './Navi.css';
import React, { Component } from "react";
import Navi from "./component/Navi"
import Category from "./component/Category"
import ProductAlbum from "./component/ProductAlbum"
import ProductDetail from './component/ProductDetail';
import OrderDetail from './component/OrderDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stableCategory: "",
      products: [],
      cart: [],
      orders: [],
      selectedCategoryId: null,
      selectedProduct: null,
      showModal: false,
    };
  }

  addToOrder = () => {
    const { cart, orders } = this.state;
    if (cart.length > 0) {
      const order = {
        id: orders.length + 1,
        items: cart.map(({ product, quantity }) => ({ ...product, quantity })),
      };
      this.setState((prevState) => ({
        orders: [...prevState.orders, order],
        cart: [],
      }));
    }
  };



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

  calculateOrderTotal = (orderItems) => {

  };

  calculateOrdQtyTotal = (orderItems) => {

  };


  calculateQtyTotal = () => {
    let total = 0;
    for (const cartItem of this.state.cart) {
      total += cartItem.quantity;
    }
    return total;
  };


  handleCategorySelect = (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
  };

  setOrders = (orders) => {
    this.setState({ orders });
  };

    openModal = (product) => {
      this.setState({ selectedProduct: product, showModal: true });
  }

  closeModal = () => {
    this.setState({ selectedProduct: null, showModal: false });
  }
  render() {
    return (
      <div className="App bg-light">
        <div className='navmarginBT'>
          <Navi
            onCategorySelect={this.handleCategorySelect}
            cart={this.state.cart}
            removeToCart={this.removeToCart}
            clearCart={this.clearCart}
            calculateCartTotal={this.calculateCartTotal}
          />
          <Category onCategorySelect={this.handleCategorySelect} />
        </div>
        <div className="container text-center ">
          <div className="row-1">
            <ProductAlbum onProductClick={this.openModal} />
          </div>
          <div className="row-2" >
            <ProductDetail
              addToCart={this.addToCart}
              albums={this.state.products}
              selectedCategory={this.state.selectedCategoryId}
              onClose={this.closeModal}
              onProductClick={this.openModal}
              showModal={this.state.showModal}
              selectedProduct={this.state.selectedProduct}
            />
          </div>
          <div className="row-3" >
            <hr />
            <OrderDetail cart={this.state.cart}
              calculateCartTotal={this.calculateCartTotal}
              calculateQtyTotal={this.calculateQtyTotal}
              calculateOrderTotal={this.calculateOrderTotal}
              removeToCart={this.removeToCart}
              addToOrder={this.addToOrder}
              orders={this.state.orders}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
