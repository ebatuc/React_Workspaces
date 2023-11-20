//rafce kısayoldan yapııyı kurmak için
import React, { useState } from 'react';

const Modal = ({ products, showModal, onClose }) => {




    return (
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{products.header}</h5>
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {products.image && <img src={products.image} alt={products.header} className="img-fluid" />}
                        <p>{products.desc}</p>
                        <div className="fh5co_consectetur">
                            <i className="fa fa-heart-o"></i> {products.favNum}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;