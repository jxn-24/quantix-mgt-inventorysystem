import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await getItemById(id);
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Quantity:</strong> {item.quantity}</p>
      <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
    </div>
  );
}

export default ItemDetails;