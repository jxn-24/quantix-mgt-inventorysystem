import { Routes, Route} from "react-router-dom"
//import NavBar from "./components/NavBar"
import ItemList from './pages/ItemList'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'
import ItemDetails from './pages/ItemDetails'
import LowStockItems from './pages/LowStockItems'


function App() {
  return (
    <div className="app">
      
      {/* <NavBar /> */}
      <div className="container">
        <Routes>
        <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/low-stock" element={<LowStockItems />} />
        </Routes>
        </div>
      </div>
  )
}
export default App