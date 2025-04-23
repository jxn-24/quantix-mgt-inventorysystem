import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for inventory items


function ItemList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(MOCK_ITEMS);

  // Handle search input changes
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = MOCK_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h2 className="mb-3">Inventory Items</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or category..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-3"
      />

      {/* Display List of Items */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  onError={(e) => {
                    e.target.src = '/images/default.jpg'; // Fallback image
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {item.category}<br />
                    <strong>Quantity:</strong> {item.quantity}<br />
                    <strong>Price:</strong> ${item.price.toFixed(2)}
                  </p>
                  <Link to={`/item/${item.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items found matching "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
}

export default ItemList;