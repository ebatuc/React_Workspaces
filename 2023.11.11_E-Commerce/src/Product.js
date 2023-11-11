import React from 'react';
import './product.css';
import {
    CardText,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from 'reactstrap';

function Product({ productArray, addToCart }) {
    return (
        <Row>
            {productArray.map((productItem) => (
                <Col xs="4" className='mb-4' key={productItem.id}>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {productItem.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Product Price: {productItem.price}$
                            </CardSubtitle>
                            <CardText>
                                {productItem.description}
                            </CardText>
                            <Button onClick={ ()=> addToCart(productItem)}>
                                Add to Cart
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Product;
