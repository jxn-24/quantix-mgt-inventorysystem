import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Inventory Manager</h1>
      <div className="links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
          All Items
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => isActive ? "active-link" : ""}>
          Add Item
        </NavLink>
        <NavLink to="/low-stock" className={({ isActive }) => isActive ? "active-link" : ""}>
          Low Stock
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;