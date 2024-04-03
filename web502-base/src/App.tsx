import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddProduct from "./pages/addProduct";
import Login from "./pages/Login";
import Register from "./pages/register";
import EditProduct from "./pages/editProduct";
import { TProduct } from "./interfaces/product";
import { useEffect, useState } from "react";
import instance from "./apis";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  });
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">ADD</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
