import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="brand">Quantix MGT</div>
        <div className="flex gap-4">
          <Link to="/" className="btn">
            Inventory
          </Link>
          <Link to="/add" className="btn btn-primary">
            Add Item
          </Link>
          <Link to="/low-stock" className="btn">
            Low Stock
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;