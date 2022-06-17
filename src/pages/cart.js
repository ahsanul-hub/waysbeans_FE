import React, { useState, useContext, useEffect } from "react";
import { Modal, Dropdown, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.js";
import Guetemala from "../assets/Guetemala.png"
import Trash from "../assets/trash.svg"
import { API } from "../config/api";
import convertRupiah from "rupiah-format";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);
  let navigate = useNavigate();

  const getProductCart = async () => {
    try {
      const response = await API.get("/cart");
      setProducts(response.data.data);
      const totalqty = response.data.data.reduce(
        (sum, elem) => sum + elem.qty,
        0
      );
        setQty(totalqty)
        console.log(totalqty)
        const totalprice = response.data.data.reduce(
          (sum, elem) => sum + elem.qty * elem.product.price,
          0
        );
          setTotal(totalprice)
          console.log(totalprice)
    } catch (error) {
      console.log(error);
    }
  };
  
  const increaseCart = async (idProduct) => {
    try {
      const result = products.find(({ id }) => id == idProduct);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ qty: result.qty + 1 });
      const response = await API.patch("/cart/" + idProduct, body, config);
      console.log(result.qty++);
      getProductCart();
    } catch (error) {
      console.log(error);
    }
  };

  const getQty = async () =>{
    try {
      
      
    } catch (error) {
      console.log(error)
    }
  }

  const decreaseCart = async (idProduct) => {
    

    try {
      const result = products.find(({ id }) => id == idProduct);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ qty: result.qty - 1 });
      const response = await API.patch("/cart/" + idProduct, body, config);
      console.log(result.qty--);
      getProductCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTransaction = (e) => {
    // e.preventDefault();
    let price = parseInt(e.target.value);
    const checked = e.target.checked;

    // console.log(checked);
    // console.log(price);
    // if (!total) {
    // setTotal(price);
    // } else {
    // setTotal(total + price);
    // }
    // console.log(total);

    if (checked) {
      // let total += e.target.value
      // if (!total) {
      setTotal(parseInt(total + price));
    } else {
      setTotal(parseInt(total - price));
    }
    // }
    console.log(total);
    // else {
    //   let newCategoryId = categoryId.filter((categoryIdItem) => {
    //     return categoryIdItem != id;
    //   });
    //   setCategoryId(newCategoryId);
    // }
  };

  const deleteById = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      getProductCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductCart();
    getQty()
  }, []);


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
                {products?.map((item, index) => (
                      <div key={index}>
                        <div className="menu">
                          <div className="product" style={{backgroundColor:"white" ,height:100}}>
                            <img src={item.product.image} alt="menu pict" />
                            <div className="qty">
                              <p>{item.product.name}</p>
                              <button
                                type="button"
                                onClick={() => decreaseCart(item.id)}
                              >
                                -
                              </button>
                             <span>{item.qty}</span>
                              <button
                                type="button"
                                onClick={() => increaseCart(item.id)}

                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="price">
                            <p>
                            {convertRupiah.convert(
                              item.qty * item.product.price
                            )}
                            </p>
                            <a>
                              <img
                                src={Trash}
                                alt="bin"
                                onClick={() => deleteById(item.id)}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="line1" />
                      </div>

                ))}
                 
                </div>

                <div className="details">
                  <div className="detail">
                    <p className="nameDetail">Subtotal</p>
                    <p className="priceDetail">
                    {convertRupiah.convert(
                             total
                            )}
                    </p>
                  </div>
                  <div className="detail">
                    <p className="nameDetail">Qty</p>
                    <p className="numberDetail">
                     {qty}
                    </p>
                  </div>
                  <div className="line2" />

                  <div className="total">
                    <p>Total</p>
                    <p>{convertRupiah.convert(
                             total
                            )}</p>
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
