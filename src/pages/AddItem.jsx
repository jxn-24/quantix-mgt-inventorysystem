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
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Category Field */}
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        {/* Quantity Field */}
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1" // Ensure minimum value is 1
            required
          />
        </div>

        {/* Price Field */}
        <div>
          <label>Price:</label>
          <input
            type="number"
            step="0.01" // Allow up to two decimal places
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min="0.01" // Ensure minimum value is 0.01
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Images Field */}
        <div>
          <label>Image URLs (comma-separated):</label>
          <input
            type="text"
            value={images.join(', ')} // Display images as a comma-separated string
            onChange={handleImagesChange}
            placeholder="Enter image URLs separated by commas"
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;