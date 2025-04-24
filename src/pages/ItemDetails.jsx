import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ItemDetails() {
  const { id } = useParams()
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items/${id}`)
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem()
  }, [id]);

  if (!item) return <div>Loading...</div>

  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <div className="details-grid">
        <div>
          <h3>Category</h3>
          <p>{item.category}</p>
        </div>
        <div>
          <h3>Quantity</h3>
          <p>{item.quantity}</p>
        </div>
        <div>
          <h3>Price</h3>
          <p>Ksh.{item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="action-buttons">
        <Link to="/items" className="btn back-btn">Back to List</Link>
        <Link to={`/edit/${id}`} className="btn edit-btn">Edit Item</Link>
      </div>
    </div>
  );
}

export default ItemDetails;