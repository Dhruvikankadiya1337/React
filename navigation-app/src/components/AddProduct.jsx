import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Books"); // Default Books
  const [image, setImage] = useState(""); // Optional: image url

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: Number(price),
      description,
      category,
      image: image || "https://via.placeholder.com/200x200?text=Product", // default if blank
    };

    axios.post("http://localhost:5000/products", newProduct)
      .then(() => {
        alert("✅ Product Added Successfully!");
        navigate("/products");
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Add New Book/Product</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title: </label><br />
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Price: </label><br />
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Description: </label><br />
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Category: </label><br />
          <input 
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Image URL: </label><br />
          <input 
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Optional"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px", background: "green", color: "white", border: "none", cursor: "pointer" }}>
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
