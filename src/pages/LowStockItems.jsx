import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for inventory items
const MOCK_ITEMS = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    quantity: 5,
    price: 999.99,
    image: 'https://m.media-amazon.com/images/I/71kBeFDgCkL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Chair',
    category: 'Furniture',
    quantity: 10,
    price: 50.0,
    image: 'https://cdn11.bigcommerce.com/s-9nl27vlw/images/stencil/532x532/products/7338/16667/PXL_20250123_121512348.PORTRAIT__89721.1737709019.jpg?c=2',
  },
  {
    id: 3,
    name: 'Charger',
    category: 'Electronics',
    quantity: 20,
    price: 15.0,
    image: 'https://hotpoint.co.ke/media/cache/6e/b9/6eb9197bfae67dc9f4aeab1afcbb650d.webp',
  },
  {
    id: 4,
    name: 'Desk',
    category: 'Furniture',
    quantity: 7,
    price: 150.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJa5GDLH6MT5UEfFzdExIh_ziJ3wCnbMg7RhCsnrwqJFZ-bSBytFViHUjFrsHeI4p1ki0&usqp=CAU',
  },
  {
    id: 5,
    name: 'Headphones',
    category: 'Electronics',
    quantity: 12,
    price: 79.99,
    image: 'https://techbramtechnologies.co.ke/wp-content/uploads/2016/03/Gaming-headphones.jpg',
  },
  {
    id: 6,
    name: 'Monitor',
    category: 'Electronics',
    quantity: 8,
    price: 250.0,
    image: 'https://electronicwhiteboardswarehouse.com/cdn/shop/files/download_0ff07200-461d-4089-a749-b43a91c639a1_1024x.jpg?v=1696165971',
  },
  {
    id: 7,
    name: 'Keyboard',
    category: 'Electronics',
    quantity: 15,
    price: 45.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_Lh6UEIII0PjjmVzMMMDtPnrp_peP9deiYIyrNmuY78_ioLcwkquiwMEYOlXy9Ex8nA&usqp=CAU',
  },
  {
    id: 8,
    name: 'Mouse',
    category: 'Electronics',
    quantity: 25,
    price: 20.0,
    image: 'https://m.media-amazon.com/images/I/61Mk3YqYHpL._AC_SL1500_.jpg',
  },
  {
    id: 9,
    name: 'Office Table',
    category: 'Furniture',
    quantity: 4,
    price: 300.0,
    image: 'https://furniturechoicekenya.com/wp-content/uploads/2023/04/1547812_img-20190119-135155-7_1500x1125-removebg-preview.png',
  },
  {
    id: 10,
    name: 'Gaming Chair',
    category: 'Furniture',
    quantity: 6,
    price: 200.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddIMbLZQQnUlsQkTqrMF0BNJxHaUklVAdl8WwAHJhj7dC0ZNkk0DmQIF2KP-BIWZ3CYE&usqp=CAU',
  },
  {
    id: 11,
    name: 'Smartphone',
    category: 'Electronics',
    quantity: 10,
    price: 699.99,
    image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/66f307779c1020001d4ed3b8.jpg',
  },
  {
    id: 12,
    name: 'Printer',
    category: 'Electronics',
    quantity: 3,
    price: 120.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE5GjkOIROLmovVOs3J1X8gZ4sHcTCLY3UhwLVacdgRPIvmZBYh7t8zN3ETS_Tcpi_OA&usqp=CAU',
  },
  {
    id: 13,
    name: 'Bookshelf',
    category: 'Furniture',
    quantity: 5,
    price: 80.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbsAkgGzGoMp9rydmOGCsvEsnlw6LWZ8lj-2KNV6ufAAvtI1U1JGp1t9_s44CsgBhHJU&usqp=CAU',
  },
  {
    id: 14,
    name: 'External Hard Drive',
    category: 'Electronics',
    quantity: 18,
    price: 90.0,
    image: 'https://arcticcomputershop.com/wp-content/uploads/2022/07/4.jpg',
  },
  {
    id: 15,
    name: 'Couch',
    category: 'Furniture',
    quantity: 2,
    price: 400.0,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1678558293-98a1e29126ae46ae5eeab549cd9f913a.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
  },
];

function LowStockItems() {
  const [lowStockItems, setLowStockItems] = useState([]);
  const [threshold, setThreshold] = useState(5); // Default low-stock threshold
  const [filterCategory, setFilterCategory] = useState('All'); // Default filter is "All"

  // Fetch and filter low-stock items based on the threshold and category
  useEffect(() => {
    const fetchLowStockItems = () => {
      let filtered = MOCK_ITEMS.filter((item) => item.quantity <= threshold);

      // Apply filtering by category
      if (filterCategory !== 'All') {
        filtered = filtered.filter((item) => item.category === filterCategory);
      }

      setLowStockItems(filtered);
    };

    fetchLowStockItems();
  }, [threshold, filterCategory]);

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

      {/* Display Low-Stock Items */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {lowStockItems.length > 0 ? (
          lowStockItems.map((item) => (
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