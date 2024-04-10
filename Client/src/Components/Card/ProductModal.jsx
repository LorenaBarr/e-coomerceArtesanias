import React from "react";
import PropTypes from "prop-types"; 

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={product.imageUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={onClose}>Cerrar</button>
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductModal;

ProductModal.propTypes = {
    product: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
     
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };
  