import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Cart from './pages/Cart';
import OrderTracking from './pages/OrderTracking';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.addToOrder = this.addToOrder.bind(this);
    this.fetchDbOrders = this.fetchDbOrders.bind(this);
  }
  state = {
    categories: [],
    brands: [],
    products: [],
    cart: [],
    wish: [],
    orders: [],
    dbOrders: [],
  }

  // ! GET FROM DB
  componentDidMount() {
    this.getProducts();
    this.getProductsByBrand();
    this.getCategories();
    this.getBrands();
    this.fetchDbOrders();


  }

  getCategories = async () => {

    const response = await axios.get('http://localhost:3000/categories');
    this.setState({ categories: response.data });
  }
  getBrands = async () => {
    const response = await axios.get('http://localhost:3000/brands');
    this.setState({ brands: response.data });
  }

  getProducts = async (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    const response = await axios.get((url))
    this.setState({ products: response.data });
  };


  getProductsByBrand = async (brandId) => {
    let url = "http://localhost:3000/products";
    if (brandId) {
      url += "?brandId=" + brandId;
    }
    const response = await axios.get((url));
    this.setState({ products: response.data });
  };


  // ! Fonksyionlar
  getCategoryName = (categoryId) => {
    const category = this.state.categories.find(item => item.id === categoryId);
    return category ? category.categoryName : '';
  }
  //!---------------------------------------- Favoriye Ekle ----------------------------------------------------
  addToWish = (product) => {
    let newWish = [...this.state.wish];

    var addedItem = newWish.find((e) => e.product.id === product.id);
    if (addedItem) {
      alert("Product has already added to wish list")
    } else {
      newWish.push({ product: product });
    }
    this.setState({ wish: newWish });
  };

  //!---------------------------------------- Favori Son ----------------------------------------------------
  //!---------------------------------------- Sepete Ekle ----------------------------------------------------
  addToCart = async (product) => {
    let newCart = [...this.state.cart];

    var addedItem = newCart.find((e) => e.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart }, () => {
    });
    console.log(this.state.cart);
  };


  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((e) => e.product.id !== product.id)
    this.setState({ cart: newCart });
  };



  calculateCartTotal = () => {
    let total = 0;
    for (const cartItem of this.state.cart) {
      total += cartItem.product.price * cartItem.quantity;
    }
    total = parseFloat(total.toFixed(2));
    return total;
  };
  //!--------------------------------------- sepete ekle son -----------------------------------------------

  // ! --------------------------------------Sipariş Kaydı oluştur -----------------------------------------

  addToOrder = (bAdress) => { 
    const { cart } = this.state;
    if (cart.length > 0) {
      const nextOrderNo = this.state.dbOrders.length + 1;

    
      const order = {
        orderNo: nextOrderNo,
        id: uuidv4(),
        items: cart.map(({ product, quantity }) => ({ ...product, quantity })),
        personalInfo: bAdress,
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
    axios.post('http://localhost:3000/orders', this.state.orders, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log("Order has been updated:", response.data);
        this.fetchDbOrders();
      })
      .catch(error => {
        console.error("Order has not been updated", error);
      });
  };




  // ! GET ORDERS FROM DB
  fetchDbOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3000/orders');
      const data = response.data;

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



  // ! --------------------------------------Sipariş Kaydı son ---------------------------------------------

  render() {
   
    return (

      <div>

        <Header wish={this.state.wish}
          addToCart={this.addToCart}
          cart={this.state.cart}
          calculateCartTotal={this.calculateCartTotal}
          removeFromCart={this.removeFromCart}
        />
        <Routes>
          <Route path="/" element={<Home products={this.state.products}
            categories={this.state.categories} brands={this.state.brands}
            getProducts={this.getProducts}
            getCategoryName={this.getCategoryName}
            getProductsByBrand={this.getProductsByBrand}
            addToCart={this.addToCart}
            addToWish={this.addToWish} />}
          />

          <Route path="/shop" element={<Shop products={this.state.products}
            categories={this.state.categories} brands={this.state.brands}
            getProducts={this.getProducts}
            getProductsByBrand={this.getProductsByBrand}
            addToCart={this.addToCart}
            addToWish={this.addToWish} />}
          />

          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart
            cart={this.state.cart}
            calculateCartTotal={this.calculateCartTotal}
            removeFromCart={this.removeFromCart}
          />} />
          <Route path="/ordertracking" element={<OrderTracking 
          cart={this.state.cart}
          calculateCartTotal={this.calculateCartTotal}
          dbOrders={this.state.dbOrders}/>} />
          <Route path="/checkout" element={<Checkout
            cart={this.state.cart}
            calculateCartTotal={this.calculateCartTotal}
            addToOrder={this.addToOrder}
            dbOrders={this.state.dbOrders}
            fetchDbOrders={this.fetchDbOrders} 
            />} />


        </Routes>
        <Footer />

      </div>

    )
  }

}