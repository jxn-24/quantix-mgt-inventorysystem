import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemList from './pages/ItemList';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';
import ItemDetails from './pages/ItemDetails';
import LowStockItems from './pages/LowStockItems';
import './styles/App.css';

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
