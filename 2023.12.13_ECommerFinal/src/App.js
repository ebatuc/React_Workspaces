import './App.css';
import './Navi.css';
import React, { Component } from "react";
import Navi from "./component/Navi"
import Category from "./component/Category"
import ProductAlbum from "./component/ProductAlbum"
import ProductDetail from './component/ProductDetail';
import OrderDetail from './component/OrderDetail';
import { v4 as uuidv4 } from 'uuid';





class App extends Component {
  componentDidMount() {
    this.fetchDbOrders();
}
componentDidUpdate(prevProps) {
  // Eğer dbOrders prop'u değiştiyse ve içinde veri varsa sayfayı güncelle
  if (prevProps.dbOrders !== this.props.dbOrders && this.props.dbOrders.length >= 0) {
      this.fetchDbOrders()
  }
}


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
    const { cart} = this.state;
    if (cart.length > 0) {
      const nextOrderNo = this.state.dbOrders.length + 1;
      const order = {
        orderNo: nextOrderNo,
        id: uuidv4(),
        items: cart.map(({ product, quantity }) => ({ ...product, quantity })),
      };

      this.setState((prevState) => ({
        orders: [...prevState.orders, order],
        cart: [],
      }), () => {
        console.log("addToOrder sonrasında Orders:", this.state.orders);
        //! afer post database clear orders array to avoid iteration problems
        this.createOrderInDatabase();
        this.clearOrders();
        this.fetchDbOrders();
      });
    }
  };

  clearOrders = () => {
    this.setState({ orders: [] });
  };


  // ! POST ORDERS ON DB
  createOrderInDatabase() {
    fetch(`http://localhost:3000/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.orders),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Order has been updated:", data)
      })
      .catch(error => console.error("Order Has Not Been Updated", error));
  };



  // ! GET ORDERS FROM DB
  fetchDbOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders');
      const data = await response.json();

      console.log("Orders API'sinden gelen veriler:", data);

      if (data) {
        this.setState({ dbOrders: data });
        console.log("dbOrders API'sinden gelen veriler:", this.state.dbOrders);
      } else {
        console.error('API verisi beklenen formatta değil.');
      }
    } catch (error) {
      console.error('Veri alma hatası:', error);
    }
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

  calculateOrderTotal = () => {
    let total = 0;
    for (const order of this.state.orders) {
      total += order.price * order.quantity
    }
    return total;
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
              dbOrders={this.state.dbOrders}
              fetchDbOrders={this.fetchDbOrders}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
