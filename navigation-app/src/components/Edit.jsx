import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams(); // Get the dynamic id from URL
  const navigate = useNavigate();

  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    // Replace this with actual fetch logic from your server
    const fetchItem = async () => {
      const data = {
        1: { title: "Product 1", description: "Description 1", price: 50, category: "Books", image: "" },
        2: { title: "Product 2", description: "Description 2", price: 30, category: "Electronics", image: "" },
      };
      if (data[id]) {
        setItem(data[id]);
      } else {
        alert("Item not found!");
        navigate("/products"); // Redirect to products if not found
      }
    };
    fetchItem();
  }, [id, navigate]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Updated Item ${id}:\nTitle: ${item.title}\nDescription: ${item.description}`);
    navigate("/products"); // Redirect to products after saving
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Edit Product</h2>
        <input
          type="text"
          name="title"
          value={item.title}
          onChange={handleChange}
          placeholder="Title"
          style={styles.input}
          required
        />
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          placeholder="Price"
          style={styles.input}
          required
        />
        <input
          type="text"
          name="category"
          value={item.category}
          onChange={handleChange}
          placeholder="Category"
          style={styles.input}
          required
        />
        <input
          type="text"
          name="image"
          value={item.image}
          onChange={handleChange}
          placeholder="Image URL"
          style={styles.input}
        />
        <textarea
          name="description"
          value={item.description}
          onChange={handleChange}
          placeholder="Description"
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5", // Products page jaise light background
    paddingTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 40px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    width: "400px",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "80px",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff4500", // Products page color tone
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};
