import React, { useState, useContext, useEffect } from "react";
// import styles from "../styles/Landing.module.css";
import { Modal, Dropdown, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// // import Transactions from "../components/Transactions";
// //import stylesN from "../components/Navbar.module.css";
import Navbar from "../components/navbar.js";
import Jumbotron from "../assets/Jumbotron.png"


 
//context
// import { UserContext } from "../context/userContext";

//API config
// import { API, setAuthToken } from "../config/api";

export default function AddProduct() {
  let navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    photo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const modalClose = () => {
    setModal(false);
    // navigate("/addproduct");
    window.location.reload();
  };
  const showModal = () => setModal(true);

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="AddProduct">
          <h4>Add Product</h4>
          <form className="editProfilForm" 
        //   onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className="inputName"
              onChange={handleChange}
              name="name"
            />
            <input
              type="number"
              placeholder="Stock"
              name="stock"
              className="inputPrice"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="inputPrice"
              onChange={handleChange}
            />
            <textarea
              placeholder="Description Product"
              className="inputDesc"
              onChange={handleChange}
              name="description"
            />

            <label htmlFor="file" className="inputFile">
              <p>Photo Product</p>
              {/* <img src="./images/attachFile.png" alt="" /> */}
            </label>
            <input
              type="file"
              hidden
              id="file"
              name="photo"
              onChange={handleChange}
              aria-label="File browser example"
            />

            <button className="btnSave" type="submit" onClick={showModal}>
              Add Product
            </button>
          </form>
        </div>
        <div id="preview" className="preview">
          {preview ? (
            <img src={preview} style={{ objectFit: "content" }} alt=" " />
          ) : (
            <img className="vanish" alt=" " />
          )}
        </div>
      </div>
     
    
    </>
  );
}
