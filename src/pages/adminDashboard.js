import React, { useState, useContext, useEffect } from "react";
import allow from "../assets/allow.png";
import deny from "../assets/deny.png";
import Navbar from "../components/navbar";

import { API } from "../config/api";

function AdminDashboard() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");
      setTransactions(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ status: status });
      const response = await API.patch(`/transaction/${id}`, body, config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  function Action(props) {
    let component;

    if (props.props.status == "pending") {
      component = (
        <>
          <button
            class="cancel"
            className="cancel pointer"
            onClick={() => {
              updateStatus(props.props.id, "cancel");
            }}
          >
            Cancel
          </button>
          <button
            class="approve"
            className=" approve pointer"
            onClick={() => {
              updateStatus(props.props.id, "on the way");
            }}
          >
            Approve
          </button>
        </>
      );
    } else if (props.props.status == "cancel") {
      component = (
        <>
          <img src={deny} />
        </>
      );
    } else if (props.props.status == "success") {
      component = (
        <>
          <img src={allow} />
        </>
      );
    } else {
      component = (
        <>
          <img src={allow} />
        </>
      );
    }
    return component;
  }

  function Status(props) {
    let component;

    if (props.props == "pending") {
      component = <td className="text-warning">{props.props}</td>;
    } else if (props.props == "cancel") {
      component = <td style={{ color: "red" }}>{props.props}</td>;
    } else if (props.props == "success") {
      component = <td className="text-success">{props.props}</td>;
    } else {
      component = <td className="text-primary">{props.props}</td>;
    }
    return component;
  }

  return (
    <>
      <Navbar />
      <body>
        <h1 class="h1Admin">Income Transaction</h1>
        <table className="mb-4">
          <tr>
            <th class="no">No</th>
            <th class="name">Name</th>
            <th class="addresAdmin">Address</th>

            <th>Products Order</th>
            <th>Status</th>
            <th class="action">Action</th>
          </tr>
          {transactions?.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.buyer.name}</td>
              <td>{item.address}</td>

              <td>{item.products?.map((item) => `${item.name} `)}</td>
              {/* <td class="yellow">{item.status}</td> */}
              <Status props={item.status} />
              <td class="btnAction text-center">
                <Action props={item} />
              </td>
            </tr>
          ))}
        </table>
      </body>
    </>
  );
}

export default AdminDashboard;
