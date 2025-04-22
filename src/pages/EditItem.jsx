import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data for inventory items
const MOCK_ITEMS = [
  { id: 1, name: 'Laptop', category: 'Electronics', quantity: 5, price: 999.99 },
  { id: 2, name: 'Chair', category: 'Furniture', quantity: 10, price: 50.0 },
  { id: 3, name: 'Headphones', category: 'Electronics', quantity: 2, price: 150.0 },
  { id: 4, name: 'Desk', category: 'Furniture', quantity: 7, price: 200.0 },
];

function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the item to edit
  const itemToEdit = MOCK_ITEMS.find((item) => item.id === parseInt(id));

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: itemToEdit?.name || '',
    category: itemToEdit?.category || '',
    quantity: itemToEdit?.quantity || 0,
    price: itemToEdit?.price || 0,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate updating the item (e.g., send data to an API)
    console.log('Updating item:', formData);

    // Redirect to the Item List page after submission
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category Field */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price Field */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditItem;