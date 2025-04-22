import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddItem() {
  const [formData, setFormData] = useState({ name: '', category: '', quantity: 0, price: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Same form fields as before */}
        {/* ... */}
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;