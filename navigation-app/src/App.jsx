import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Edit from "./components/Edit";


function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
             <Route path="/Login" element={<Login />} />
          <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
