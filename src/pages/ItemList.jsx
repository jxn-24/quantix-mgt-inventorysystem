import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import ItemCard from './ItemCard.jsx';

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
    <div className="container">
    <h2>Inventory Items</h2>
    
    <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />

    <div className="stats-grid">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))
      ) : (
        <div className="card">
          <p>No items found matching "{searchTerm}".</p>
        </div>
      )}
    </div>
  </div>
);
}

export default ItemList;