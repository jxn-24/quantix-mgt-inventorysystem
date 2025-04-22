import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/edit/:id" element={<EditItem />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/low-stock" element={<LowStockItems />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
