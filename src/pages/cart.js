import React, { useState, useContext, useEffect } from "react";
// import styles from "../styles/Landing.module.css";
import { Modal, Dropdown, NavDropdown } from "react-bootstrap";
// import { Link, Navigate } from "react-router-dom";
// // import Transactions from "../components/Transactions";
// //import stylesN from "../components/Navbar.module.css";
import Navbar from "../components/navbar.js";
import Guetemala from "../assets/Guetemala.png"
import Trash from "../assets/trash.svg"






export default function Cart() {



  return (
    <>
      <Navbar />
      <h3 className="myCart">My Cart</h3>
          <div className="cart">
            <form>
              <h5>Review Your Order</h5>
              <div className="lines">
                <div className="line1" />
                <div className="line2" />
              </div>

              <div className="Order">
                <div className="menulist">
                 
                    
                      <div >
                        <div className="menu">
                          <div className="product" style={{backgroundColor:"white"}}>
                            <img src={Guetemala} alt="menu pict" />
                            <div className="qty">
                              <p>kopi</p>
                              <button
                                type="button"
                                // onClick={() => decrement(orderedMenu.id)}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={8}
                                readOnly
                                // style={{}
                              />
                              <button
                                type="button"
                                // onClick={() => increment(orderedMenu.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="price">
                            <p>
                              Rp 90
                            </p>
                            <a>
                              <img
                                src={Trash}
                                alt="bin"
                                // onClick={() => delOrder(orderedMenu.id)}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="line1" />
                      </div>
                    
                 
                </div>

                <div className="details">
                  <div className="detail">
                    <p className="nameDetail">Subtotal</p>
                    <p className="priceDetail">
                      Rp 40000
                    </p>
                  </div>
                  <div className="detail">
                    <p className="nameDetail">Qty</p>
                    <p className="numberDetail">
                      90
                    </p>
                  </div>
                  <div className="line2" />

                  <div className="total">
                    <p>Total</p>
                    <p>Rp 90</p>
                  </div>

                  <div className="orderBtn">
                    <button type="button" 
                    // onClick={() => navigate("/shipment")}
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
    
    </>
  );
}
