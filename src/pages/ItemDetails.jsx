import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for inventory items
const MOCK_ITEMS = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    quantity: 5,
    price: 999.99,
    description: 'A high-performance laptop with 16GB RAM and 512GB SSD.',
    images: ['/images/laptop-1.jpg', '/images/laptop-2.jpg'],
  },
  {
    id: 2,
    name: 'Chair',
    category: 'Furniture',
    quantity: 10,
    price: 50.0,
    description: 'An ergonomic office chair with adjustable height.',
    images: ['/images/chair-1.jpg', '/images/chair-2.jpg'],
  },
];

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = MOCK_ITEMS.find((item) => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{item.name}</h2>

      {/* Image Gallery */}
      <div className="row mb-3">
        {item.images.map((image, index) => (
          <div key={index} className="col-md-4">
            <img
              src={image}
              alt={`${item.name} - ${index + 1}`}
              className="img-fluid rounded"
              onError={(e) => {
                e.target.src = '/images/default.jpg'; // Fallback image
              }}
            />
          </div>
        ))}
      </div>

      {/* Details Section */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Details</h5>
          <p className="card-text"><strong>Category:</strong> {item.category}</p>
          <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
          <p className="card-text"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
          <p className="card-text"><strong>Description:</strong> {item.description}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="d-flex gap-2">
        <Link to={`/edit/${item.id}`} className="btn btn-warning">
          Edit
        </Link>
        <button className="btn btn-danger">Delete</button>
        <Link to="/" className="btn btn-secondary">
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default ItemDetails;