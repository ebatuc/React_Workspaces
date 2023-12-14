// Modal.js
import React from 'react';

const ProductDetailModal = ({ product, onClose }) => {
  return (
    <div className="modal-body">
      {product.image && <img src={product.image} alt={product.header} className="img-fluid" />}
      <p>{product.desc}</p>
      <div className="fh5co_consectetur">
        <i className="fa fa-heart-o"></i> {product.favNum}
      </div>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

const Modal = ({ showModal, onClose, selectedProduct }) => {
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
            <h5 className="modal-title">{selectedProduct?.header}</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {selectedProduct && (
            <ProductDetailModal product={selectedProduct} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
