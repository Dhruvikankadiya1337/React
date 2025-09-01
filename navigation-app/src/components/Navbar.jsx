import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#333",
      padding: "12px 20px",
      display: "flex",
      justifyContent: "center"
    }}>
      <ul style={{
        display: "flex",
        listStyle: "none",
        gap: "20px",
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/products" style={linkStyle}>Products</Link></li>
        <li><Link to="/add-product" style={linkStyle}>Add Product</Link></li>
        <li><Link to="/edit/1" style={linkStyle}>Edit</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px"
};

export default Navbar;
