import { Link } from "react-router-dom";
import "../styles/components.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Inventory
      </Link>
      <Link to="/add" className="nav-link">
        Add Item
      </Link>
      <Link to="/low-stock" className="nav-link">
        Low Stock
      </Link>
    </nav>
  );
};

export default Navbar;
