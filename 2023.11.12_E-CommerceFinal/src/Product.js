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

function Product({ productArray, createdProduct, addToCart }) {
    return (
        <Row>
            {productArray.map((productItem) => (
                <Col xs="4" className='mb-4' key={productItem.id}>
                    <Card>
                        <Card className='card-img'>
                        <CardImg 
                            alt="Card image cap"
                            src="https://fastly.picsum.photos/id/985/318/180.jpg?hmac=olQDIrAVU9UB1AW6rXGX1yMrBubrP4JXEfvQHOBME7E"
                            top
                            width="100%"
                            height="100%"
                        />
                        </Card>

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
                            <Button onClick={() => addToCart(productItem)}>
                                Add to Cart
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            {createdProduct.map((createdItem) => (
                <Col xs="4" className='mb-4' key={createdItem.id}>
                    <Card>
                        <Card className='card-img'>
                        <CardImg
                            alt="Card image cap"
                            src={createdItem.uploadimg}
                            top
                            width="100%"
                            height="100%"
                        />
                        </Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                {createdItem.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Product Price: {createdItem.price}$
                            </CardSubtitle>
                            <CardText>
                                {createdItem.description}
                            </CardText>
                            <Button onClick={() => addToCart(createdItem)}>
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
