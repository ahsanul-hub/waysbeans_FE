import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/navbar.js";
import Jumbotron from "../assets/Jumbotron.png"
import convertRupiah from "rupiah-format";



//context
// import { UserContext } from "../context/userContext";

//API config
import { API } from "../config/api";

export default function Landing() {
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const response = await API.get("/products");
      setProduct(response.data.data.products);
      console.log(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="Hero">
            <img
              src={Jumbotron}
              className="heropic"
              alt="hero"
            />
          </div>
          <div className="products">
            
          {products?.map((item, index) => (
                // <div className="product">
                 <Link key={index}
                to={`/detail-product/${item.id}`}
                className="product"
              >
                    <img
                      src={item.image}
                      // onClick={handLog}
                      style={{ cursor: "pointer", width:231,height:302,marginBottom:0 }}
                      alt="icon"
                    />
               
                   
                      {/* <img src={item.image} alt="icon" />   */}
                  <p className="productName">{item.name}</p>
                  <p className="productDesc" style={{ marginBottom: 0 }}>
                    {convertRupiah.convert(item.price)}
                  </p>
                  <p
                    className="productDesc"
                    style={{ marginBottom: "5px" }}
                  >
                    Stock: {item.qty}
                  </p>
               </Link>
          ))}
          </div>
    
    </>
  );
}
