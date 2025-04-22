import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";

// Home Component
function Home() {
  const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank" rel="noreferrer">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank" rel="noreferrer">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Welcome to our App!</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //     </div>
  //   </>
  // );
}

// About Page
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We're a cool company doing awesome things with React!</p>
    </div>
  );
}

// Products Page
function Products() {
  const [products] = useState([
    { id: 1, name: "React T-Shirt", price: "$25" },
    { id: 2, name: "Vite Hoodie", price: "$45" },
    { id: 3, name: "JavaScript Mug", price: "$15" },
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
      <p>Email: contact@example.com</p>
      <p>Phone: (123) 456-7890</p>
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
