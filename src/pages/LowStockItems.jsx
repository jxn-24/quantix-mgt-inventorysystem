import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for inventory items
const MOCK_ITEMS = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    quantity: 2,
    price: 999.99,
    image: '/images/laptop-1.jpg',
  },
  {
    id: 2,
    name: 'Chair',
    category: 'Furniture',
    quantity: 10,
    price: 50.0,
    image: '/images/chair-1.jpg',
  },
];

function LowStockItems() {
  const [threshold, setThreshold] = useState(5);
  const [sortBy, setSortBy] = useState('quantity');
  const [filterCategory, setFilterCategory] = useState('All');
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    const fetchLowStockItems = () => {
      let filtered = MOCK_ITEMS.filter((item) => item.quantity <= threshold);

      // Sorting
      if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'category') {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortBy === 'quantity') {
        filtered.sort((a, b) => a.quantity - b.quantity);
      }

      // Filtering by category
      if (filterCategory !== 'All') {
        filtered = filtered.filter((item) => item.category === filterCategory);
      }

      setLowStockItems(filtered);
    };

    fetchLowStockItems();
  }, [threshold, sortBy, filterCategory]);

  // Export to CSV
  const exportToCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'ID,Name,Category,Quantity,Price\n' +
      lowStockItems
        .map(
          (item) =>
            `${item.id},${item.name},${item.category},${item.quantity},${item.price}`
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'low_stock_items.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <h2>Low Stock Items</h2>

      {/* Threshold Slider */}
      <div className="mb-3">
        <label htmlFor="threshold" className="form-label">
          Set Low Stock Threshold: {threshold}
        </label>
        <input
          type="range"
          id="threshold"
          min="1"
          max="10"
          value={threshold}
          onChange={(e) => setThreshold(parseInt(e.target.value))}
          className="form-range"
        />
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-3">
        <label htmlFor="sortBy" className="form-label">
          Sort By:
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="form-select"
        >
          <option value="quantity">Quantity</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-3">
        <label htmlFor="filterCategory" className="form-label">
          Filter By Category:
        </label>
        <select
          id="filterCategory"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="form-select"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      {/* Export Button */}
      <button onClick={exportToCSV} className="btn btn-success mb-3">
        Export to CSV
      </button>

      {/* Display Low-Stock Items */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {lowStockItems.length > 0 ? (
          lowStockItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100">
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
                    <strong>Quantity:</strong>{' '}
                    <span
                      className={
                        item.quantity <= 2 ? 'text-danger' : 'text-warning'
                      }
                    >
                      {item.quantity}
                    </span>
                    <br />
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
          <p>No low-stock items found.</p>
        )}
      </div>
    </div>
  );
}

export default LowStockItems;