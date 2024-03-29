import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Guetemala from "../assets/Guetemala.png";
import { UserContext } from "../context/userContext";
import convertRupiah from "rupiah-format";

import { API } from "../config/api";

export default function Detail() {
  const [product, setProduct] = useState([]);
  const [message, setMessage] = useState(null);
  const [state] = useContext(UserContext);
  let navigate = useNavigate();

  const { id } = useParams();
  const getProduct = async () => {
    try {
      const response = await API.get("/product/" + id);
      setProduct(response.data.data);
      console.log(product);
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteById = async () => {
    try {
      await API.delete(`/product/${id}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCart = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // let idProduct = id;
      const body = JSON.stringify({ idProduct: id });

      const response = await API.post("/cart", body, config);
      console.log(response);

      // Checking process
      //   if (response?.status == 200) {
      //     const alert = (
      //       <Alert variant="success" className="py-1">
      //         Add Cart success
      //       </Alert>
      //     );
      //     setMessage(alert);
      //     navigate("/cart");
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    console.log(product);
  }, []);

  return (
    <>
      <Navbar />
      <div className="containerDetail">
        <div className="detailLeft">
          <img src={Guetemala} alt="detail image" />
        </div>
        <div className="detailRight">
          <div className="headingDetail">
            <h1>{product.name}</h1>
            <p>Stock : {product.qty}</p>
          </div>
          <div className="contentDetail">
            <p>{product.desc}</p>
          </div>
          <div className="price">
            <h3>{convertRupiah.convert(product.price)}</h3>
          </div>
          <div className="btnDetail">
            <button onClick={handleAddCart}>Add Cart</button>
          </div>
          {state.user.status == "admin" ? (
            <div className="btnDelete">
              <button
                onClick={() => {
                  deleteById();
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
