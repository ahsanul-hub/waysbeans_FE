import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import AddProduct from "./pages/addProduct";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import AdminDashboard from "./pages/adminDashboard";
import Complain from "./pages/complain";
import Detail from "./pages/detailProduct";




// import "./styles/App.css";


function App() {
  

  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/complain" element={<Complain />} />
      <Route path="/detail-product" element={<Detail />} />

    </Routes>
    </Router>
  );
}

export default App;