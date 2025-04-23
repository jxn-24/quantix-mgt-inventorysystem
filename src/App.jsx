import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components from the 'pages/' directory
import ItemList from './pages/ItemList'; // Page to display all inventory items
import AddItem from './pages/AddItem'; // Page to add new inventory items
import EditItem from './pages/EditItem'; // Page to edit existing inventory items
import ItemDetails from './pages/ItemDetails'; // Page to view item details
import LowStockItems from './pages/LowStockItems'; // Page to display low-stock items

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true, // Enable startTransition for React Router
        v7_relativeSplatPath: true, // Enable relative splat paths
      }}
    >
      {/* Main Content Container */}
      <div className="container mt-4">
        <Routes>
          {/* Default Route: Item List Page */}
          
          <Route path="/ItemList" element={<ItemList />} />

          {/* Route for Adding New Items */}
          <Route path="/Add" element={<AddItem />} />

          {/* Route for Editing Existing Items */}
          <Route path="/EditItem" element={<EditItem />} />

          {/* Route for Viewing Item Details */}
          <Route path="/ItemDetails" element={<ItemDetails />} />

          {/* Route for Displaying Low-Stock Items */}
          <Route path="/LowStockItems" element={<LowStockItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;