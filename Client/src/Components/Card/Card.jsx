import React from "react";
import PropTypes from "prop-types";


const Card = ({ product, onClick }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" onClick={() => onClick(product)}>
      <figure>
        <img src={product.URL} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>Precio: ${parseFloat(product.price).toFixed(2)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;