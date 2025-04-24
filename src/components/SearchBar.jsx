import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or category..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="form-input mb-4"
    />
  );
};

export default SearchBar;