import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function EditItem() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', category: '', quantity: 0, price: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItemById(id);
      setFormData(item);
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Same form fields as AddItem */}
        {/* ... */}
        <button type="submit" className="btn btn-success">
          Update Item
        </button>
      </form>
    </div>
  );
}

export default EditItem;