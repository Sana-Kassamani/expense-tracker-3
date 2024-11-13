import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import pencilIcon from "./../assets/pencil.png";
import trashIcon from "./../assets/trash.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Transaction = ({ transaction, setEditFlag }) => {
  return (
    <tr transaction-id={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.date}</td>
      <td>{transaction.notes}</td>
      <td>
        <button
          className="edit-btn flex align-center justify-center"
          onClick={() => {
            setEditFlag(true);
          }}
        >
          <div className="div-img">
            <img src={pencilIcon} />
          </div>
        </button>

        <button
          className="delete-btn flex align-center justify-center"
          onClick={async () => {
            const body = new FormData();
            body.append("id", transaction.id);
            try {
              const response = await axios(
                "http://localhost/expense-tracker-3/server-side/deleteTransaction.php",
                {
                  method: "post",
                  data: body,
                }
              );
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div className="div-img">
            <img src={trashIcon} />
          </div>
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
