import React, { useState } from 'react';

function AddItem() {
  // State for form fields
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // Array to store image URLs

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation: Ensure quantity and price are valid
    if (!Number.isInteger(quantity) || quantity <= 0) {
      alert('Quantity must be a positive integer.');
      return;
    }
    if (isNaN(price) || price <= 0) {
      alert('Price must be a positive number.');
      return;
    }

    // Create a new item object
    const newItem = {
      id: Date.now(), // Generate a unique ID
      name,
      category,
      quantity,
      price,
      description,
      images, // Use the images state
    };

    // Simulate adding the item (e.g., logging it to the console)
    console.log('Adding item:', newItem);

    // Reset form fields
    setName('');
    setCategory('');
    setQuantity();
    setPrice();
    setDescription('');
    setImages([]);
  };

  // Handler for updating the images state
  const handleImagesChange = (event) => {
    const urls = event.target.value.split(',').map((url) => url.trim());
    setImages(urls.filter((url) => url !== '')); // Filter out empty strings
  };

  return (
    <div className="container">
    <div className="card">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category:</label>
          <input
            type="text"
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            className="form-input"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-input"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image URLs (comma-separated):</label>
          <input
            type="text"
            className="form-input"
            value={images.join(', ')}
            onChange={handleImagesChange}
            placeholder="Enter image URLs separated by commas"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Add Item
        </button>
      </form>
    </div>
  </div>
);
}
export default AddItem;