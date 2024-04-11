import React from "react";
import PropTypes from "prop-types";


const Card = ({ product, onClick }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" onClick={() => onClick(product)}>
      <figure>
        <img src={product.imageUrl} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>Precio: ${product.price}</p>
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
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;