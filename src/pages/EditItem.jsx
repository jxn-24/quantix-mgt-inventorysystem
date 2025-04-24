import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';




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
    navigate('/ItemList');
  };

  return (
    <div className="container">
    <div className="card">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category:</label>
          <input
            type="text"
            className="form-input"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            className="form-input"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-input"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  </div>
);
}
export default EditItem;