import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
