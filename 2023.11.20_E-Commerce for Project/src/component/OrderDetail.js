import React, { Component } from 'react';

class OrderDetail extends Component {


    //! Fetch api ile orders array database e yazmak 
    handleOrder = () => {
        const { cart, setOrders } = this.props;

        if (cart.length > 0) {
            const orderItems = cart.map(({ product, quantity }) => ({
                id: product.id,
                name: product.header,
                description: product.desc,
                price: product.price,
                quantity,
            }));

            const order = {
                id: this.props.orders.length + 1,
                items: orderItems,
            };

            fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok'); 
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Order has been sent to the database:', data);
                    // Sipariş başarıyla gönderildikten sonra orders'ı güncelle
                    this.fetchOrders();
                })
                .catch(error => console.error('Order could not be sent to the database:', error));
        }
    };





    render() {
        console.log('Orders:', this.props.orders);

        return (
            <div>
                <h2 className='bg-dark text-white rounded p-3 ' id='myOrder'> My Orders</h2>
                <hr />
                {/* //!Edit Shopping Cart */}
                {this.props.cart.length > 0 && (
                    <div className="card text-bg-light mb-3"  >
                        <div className="card-header"> <h4 > Shopping Cart</h4></div>
                        <div className="card-body">
                            {this.props.cart && this.props.cart.map((cartItem) => (
                                <div className="card mb-3" key={cartItem.product.id}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={cartItem.product.image} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{cartItem.product.header}</h5>
                                                <p className="card-text">{cartItem.product.desc}</p>
                                                <p className="card-text">Quantity: {cartItem.quantity}</p>
                                                <p className="card-text">Price: {cartItem.product.price}$</p>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={() => this.props.removeToCart(cartItem.product)}
                                                >
                                                    Delete Item
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='fs-5 mb-2'>
                                Subtotal ({this.props.calculateQtyTotal() <= 1 ? `${this.props.calculateQtyTotal()} Item` : `${this.props.calculateQtyTotal()} Items`}): {this.props.calculateCartTotal()}$
                            </div>
                            <div className='d-grid gap-2'>
                                <button className='d-grid gap-2 btn btn-success fs-5' onClick={() => this.handleOrder()}>Buy Now</button>
                                {/* <button className='d-grid gap-2 btn btn-success fs-5' onClick={() => this.props.addToOrder()}>Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                )
                }
                {/* //!Edit Recent Order */}
                <div className="card text-bg-light mb-3">
                    <div className="card-header">
                        <h4>Recent Orders</h4>
                    </div>
                    <div className="card-body">
                        <div className="row"> 
                            {this.props.orders &&
                                this.props.orders.map((orderItem) => (
                                    <div key={orderItem.id} className="col-lg-3 col-md-3 col-6 mb-3">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div className="card-header">
                                                Order No: #{orderItem.id}
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                {orderItem.items.map((item) => (
                                                    <div key={item.id}>
                                                        <li className="list-group-item row-1 col-12">
                                                            {item.header}
                                                            <div className="row row-2">
                                                                <div className="col-6">Quantity: {item.quantity}</div>
                                                                <div className="col-6">Price: {item.price}$</div>
                                                            </div>
                                                        </li>
                                                    </div>
                                                ))}
                                            </ul>
                                            <div className="card-footer">
                                                {/* Subtotal ({this.props.calculateOrdQtyTotal() <= 1
                  ? `${this.props.calculateOrdQtyTotal()} Item`
                  : `${this.props.calculateQtyTotal()} Items`}):{' '}
                {this.props.calculateOrderTotal(orderItem.items)}$ */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div >
        );

    }
}

export default OrderDetail;
