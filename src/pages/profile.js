import React, { useState, useContext, useEffect } from "react";
// import styles from "../styles/Landing.module.css";
import { Modal, Dropdown, NavDropdown } from "react-bootstrap";
// import { Link, Navigate } from "react-router-dom";
// // import Transactions from "../components/Transactions";
// //import stylesN from "../components/Navbar.module.css";
import Navbar from "../components/navbar.js";
import Guetemala from "../assets/Guetemala.png"
import Trash from "../assets/trash.svg"
import styles from "../styles/Profile.module.css";





export default function Profile() {



  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.mainProfile}>
          <div className={styles.myProfile}>
            <h4>My Profile</h4>
            <div className={styles.infoPerson}>
              <div className="profilePic">
                <img
                  className={styles.profilePhoto}
                  id="outputProfile"
                  src={Guetemala}
                  alt="Profile"
                />
              </div>
              <article>
                <h5>Full Name</h5>
                <p>Radif Ganteng</p>
                <h5>Email</h5>
                <p>aldi@mail.com</p>
              </article>
            </div>
          </div>
        </div>
        <div className={styles.products}>
          <h4>My Transaction</h4>
         
          
              <div className={styles.product} >
                <div className={styles.detailProduct}>
                  <img
                    src={Guetemala}
                    className={styles.photoProduct}
                    alt="menu pict"
                  />
                  <div className={styles.number}>
                    <p className={styles.productName}>guetemala</p>
                    <p className={styles.date}>
                      tanggal
                    </p>
                    <p className={styles.productPrice}>
                      Price : Rp 20
                    </p>
                    <p className={styles.productQty}>
                      Qty : 2
                    </p>
                    <p className={styles.subTotal}>
                      Sub Total : 2
                    </p>
                  </div>
                </div>
                <div className={styles.productr}>
                  <img
                    src=""
                    alt="waysbeans icon"
                   
                  />
                  
                    <div className={styles.status}>Success</div>
                
                
                 
                    <button
                      className={styles.statuso}
                    //   onClick={() => finishTransaction(item.id)}
                    >
                      Completed
                    </button>
                  
                    
                
                </div>
              </div>
           
        </div>
      </div>
     
    
    </>
  );
}
