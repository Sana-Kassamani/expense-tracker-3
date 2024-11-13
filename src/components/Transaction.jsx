import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Transaction = ({ transaction }) => {
  //   function addEditBtn(parent, id) {
  //     let btn = document.createElement("button");
  //     btn.setAttribute("class", "edit-btn flex align-center justify-center");
  //     btn.setAttribute("transaction-id", `${id}`);
  //     btn.innerHTML = `<div class="div-img"><img src="./../assets/pencil.png"  /></div>`;
  //     parent.appendChild(btn);
  //   }

  //   const displayTransaction = (transaction) => {
  //     let row = document.createElement("tr");
  //     let type = document.createElement("td");
  //     let amount = document.createElement("td");
  //     let date = document.createElement("td");
  //     let notes = document.createElement("td");
  //     type.innerHTML = transaction.type;
  //     amount.innerHTML = transaction.amount;
  //     date.innerHTML = transaction.date;
  //     notes.innerHTML = transaction.notes;
  //     row.appendChild(type);
  //     row.appendChild(amount);
  //     row.appendChild(date);
  //     row.appendChild(notes);
  //     addDeleteBtn(row, transaction.id);
  //     addEditBtn(row, transaction.id);
  //     table.appendChild(row);
  //   };
  return (
    <tr transaction-id={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.date}</td>
      <td>{transaction.notes}</td>
      <td>
        <button className="edit-btn flex align-center justify-center">
          <div className="div-img">
            <img src="./../assets/pencil.png" />
          </div>
        </button>
      </td>
      <td>
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
            <img src="./../assets/trash.png" />
          </div>
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
