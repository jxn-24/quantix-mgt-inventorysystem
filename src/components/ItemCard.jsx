import { Link } from 'react-router-dom'

function ItemCard({ item, onDelete }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: Ksh.{item.price.toFixed(2)}</p>
      <div className="item-actions">
        <Link to={`/item/${item.id}`} className="btn view-btn">View</Link>
        <Link to={`/edit/${item.id}`} className="btn edit-btn">Edit</Link>
        <button onClick={() => onDelete(item.id)} className="btn delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default ItemCard;