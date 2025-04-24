import React from "react";
import { Link } from "react-router-dom";
import LowStockWarning from "./LowStockWarning";

const ItemCard = ({ item }) => {
  const { id, name, category, quantity, price } = item;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <LowStockWarning quantity={quantity} />
      <div className="flex gap-2 mt-4">
        <Link to={`/details/${id}`} className="btn btn-primary">
          View
        </Link>
        <Link to={`/edit/${id}`} className="btn">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;