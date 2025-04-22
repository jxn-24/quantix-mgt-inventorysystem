import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function ItemList() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
    setFilteredItems(data);
  };

  const handleSearch = (term) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h2>Inventory Items</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="col">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;