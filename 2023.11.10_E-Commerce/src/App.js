import './App.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';

function App() {

  //!

  return (
    <div>
      <Navi fluid />
      <Container className="bg-light border"
        fluid >

        <Row>
          <Col xs="3" className='mt-5 ps-3'>
            <Category />
          </Col>
          <Col xs="9" className='mt-5 pe-3'>
            <Product />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
