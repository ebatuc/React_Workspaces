import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import DataEntry from './DataEntry';
import { useState } from 'react';

function App() {

  //! Define Category Array
  const categoryArray = [
    { id: 1, name: "Category Item 1", description: "Description 1" },
    { id: 2, name: "Category Item 2", description: "Description 2" },
    { id: 3, name: "Category Item 3", description: "Description 3" },
    { id: 4, name: "Category Item 4", description: "Description 4" },
    { id: 5, name: "Category Item 5", description: "Description 5" }
  ];

  //! Define Product Array
  const productArray = [
    { id: 1, name: "Product 1", description: "Product Description 1", price: 569 },
    { id: 2, name: "Product 2", description: "Product Description 2", price: 672 },
    { id: 3, name: "Product 3", description: "Product Description 3", price: 1299 },
    { id: 4, name: "Product 4", description: "Product Description 4", price: 324 }
  ];

  //! Define features for cart area
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //! Run features for cart area
  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    setShowCart(true);
    setCartItems([...cartItems, product]);
  };

  //! Clear for all the things in cart area
  const clearCart = () => {
    setCartCount(0);
    setShowCart(false);
    setCartItems([]);
  };


  //! State variables for DataEntry Inputs
  const [createdProduct, setCreatedProduct] = useState([]);

  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: uuidv4() };
    setCreatedProduct([...createdProduct, productWithId]);
  }


  return (
    <div>
      <Navi fluid cartCount={cartCount} showCart={showCart} clearCart={clearCart} cartItems={cartItems} addToCart={addToCart} />
      <Container className="bg-light border"
        fluid >

        <Row>
          <Col xs="3" className='mt-5 ps-3'>
            <Category categoryArray={categoryArray} />
            <DataEntry addProduct={addProduct} createdProduct={createdProduct} setCreatedProduct={setCreatedProduct} />
          </Col>
          <Col xs="9" className='mt-5 pe-3'>
            <Product productArray={productArray} createdProduct={createdProduct} addToCart={addToCart} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
