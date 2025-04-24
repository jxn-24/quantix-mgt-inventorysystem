import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  // Mock data fetch - replace with your actual data source
  useEffect(() => {
    const mockItem = {
      id: 1,
      name: 'Professional Laptop',
      category: 'Electronics',
      quantity: 8,
      price: 1299.99,
      description: 'High-performance business laptop with 16GB RAM and 1TB SSD',
      images: [
        'https://example.com/laptop1.jpg',
        'https://example.com/laptop2.jpg',
        'https://example.com/laptop3.jpg'
      ]
    };
    setItem(mockItem);
  }, [id]);

  if (!item) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="mb-2">{item.name}</h2>

        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {item.images.map((image, index) => (
            <div key={index} className="aspect-square">
              <img
                src={image}
                alt={`${item.name} - ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = '/images/default.jpg';
                }}
              />
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <div className="form-group">
            <label className="form-label">Category</label>
            <div className="form-input-static">{item.category}</div>
          </div>

          <div className="form-group">
            <label className="form-label">Quantity</label>
            <div className="form-input-static">{item.quantity}</div>
          </div>

          <div className="form-group">
            <label className="form-label">Price</label>
            <div className="form-input-static">
              ${item.price.toFixed(2)}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <div className="form-input-static">{item.description}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Link
            to={`/edit/${item.id}`}
            className="btn btn-primary"
          >
            Edit Item
          </Link>
          <button className="btn btn-danger">
            Delete Item
          </button>
          <Link to="/" className="btn">
            Back to Inventory
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;