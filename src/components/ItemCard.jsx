import React from "react";
import { Link } from "react-router-dom";
import LowStockWarning from "./LowStockWarning";

const ItemCard = ({ item }) => {
  const { id, name, category, quantity, price } = item;

  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <LowStockWarning quantity={quantity} />
      <div style={styles.actions}>
        <Link to={`/details/${id}`} style={styles.link}>
          View
        </Link>
        <Link to={`/edit/${id}`} style={styles.link}>
          Edit
        </Link>
      </div>
    </div>
  );
};



export default ItemCard;
