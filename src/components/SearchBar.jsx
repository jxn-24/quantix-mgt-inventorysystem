import React from "react";
import { styles } from "components.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or category..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={styles.searchBar}
    />
  );
};

export default SearchBar;
