import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Assuming you have a CSS file for styling


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or brand name */}
        <Link to="/" className="navbar-brand">
          Inventory Manager
        </Link>

        {/* Main navigation links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Item List
            </Link>
          </li>
          <li>
            <Link to="/add" className="nav-link">
              Add Item
            </Link>
          </li>
          <li>
            <Link to="/low-stock" className="nav-link">
              Low Stock Items
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
