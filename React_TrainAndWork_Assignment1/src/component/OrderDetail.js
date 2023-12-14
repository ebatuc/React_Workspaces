import React, { Component } from 'react';

class OrderDetail extends Component {
    componentDidUpdate(prevProps) {
        // Eğer dbOrders prop'u değiştiyse ve içinde veri varsa sayfayı güncelle
        if (prevProps.dbOrders !== this.props.dbOrders && this.props.dbOrders.length >= 0) {
            this.props.fetchDbOrders()
        }
    }
    
    render() {
        console.log("gelen veri kontrol", this.props.dbOrders);
        

        return (
            
            <div>
                <h2 className='bg-dark text-white rounded p-3 ' id='myOrder'> My Orders</h2>
                <hr />
                {/* //!Edit Shopping Cart */}
                {this.props.cart.length > 0 && (
                    <div className="card text-bg-light mb-3">
                        <div className="card-header"> <h4> Shopping Cart</h4></div>
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
                            <button className='d-grid gap-2 btn btn-success fs-5' onClick={() => { this.props.addToOrder(); }}>Buy Now</button>

                            </div>
                        </div>
                    </div>
                )}
                {/* //! Edit Recent Order */}
                <div className="card text-bg-light mb-3">
                    <div className="card-header">
                        <h4>Recent Orders</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.props.dbOrders && this.props.dbOrders.map((order, orderIndex) => (
                                <div key={orderIndex} className="col-lg-3 col-md-3 col-6 mb-3">
                                    {order[0] && (
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div className="card-header">
                                                Order No: #{order[0].orderNo}
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                {order[0].items && order[0].items.map((item, itemIndex) => (
                                                    <div key={itemIndex}>
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
                                                Subtotal (
                                                {order[0].items && order[0].items.reduce((acc, item) => acc + item.price * item.quantity, 0)})$
                                            </div>
                                        </div>
                                    )}
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
