import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";

// Home Component
function Home() {
  const [count, setCount] = useState(0);

}

// About Page
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We're a cool company doing awesome things (we diyeem tu)!</p>
    </div>
  );
}

// Products Page
function Products() {
  const [products] = useState([
  
  ]);

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: Inventory1915@gmail.com</p>
      <p>Phone:+254798765432</p>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <nav
        style={{
          padding: "1rem",
          background: "#f0f0f0",
          marginBottom: "1rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
