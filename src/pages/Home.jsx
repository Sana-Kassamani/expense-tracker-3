import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import plusIcon from "./../assets/plus.png";
import axios from "axios";
import Header from "./../components/Header";
import Transaction from "../components/Transaction";
import FilterForm from "../components/FilterForm";
import EditTransactionForm from "../components/EditTransactionForm";
import TransactionForm from "./../components/TransactionForm";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  let income, expense, budget;
  const [editForm, setEditForm] = useState({});
  const [transactions, setTransactions] = useState([]);

  const [addFlag, setAddFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const getAllTransactions = async () => {
    let id = JSON.parse(localStorage.userId);
    const response = await axios.get(
      `http://localhost/expense-tracker-3/server-side/getTransactions.php?id=${id}`
    );

    setTransactions(response.data);
  };
  const getTotal = async (type) => {
    const userId = JSON.parse(localStorage.userId);
    const body = new FormData();
    body.append("id", userId);
    body.append("type", type);
    const response = await axios(
      "http://localhost/expense-tracker-3/server-side/getTotal.php",
      {
        method: "post",
        data: body,
      }
    );

    let total = await response.data;

    return total;
  };

  useEffect(() => {
    // income = getTotal("Income");
    // expense = getTotal("Expense");
    // budget = getTotal("Expense") - getTotal("Income");
    getAllTransactions();
  }, [transactions, addFlag.editFlag]);
  return (
    <>
      <div className="content-div">
        <Header income={income} expense={expense} budget={budget} />
        {addFlag && <TransactionForm setAddFlag={setAddFlag} />}
        {editFlag && (
          <EditTransactionForm setEditFlag={setEditFlag} editForm={editForm} />
        )}

        <div className="flex column space-between align-center">
          <div className="flex column space-between align-center above-table">
            <div className="flex column space-between align-center">
              <div className="flex space-between align-center above-table">
                <FilterForm />
                <button
                  className="add flex align-center justify-center"
                  onClick={() => {
                    setAddFlag(true);
                  }}
                >
                  <div className="div-img">
                    <img src={plusIcon} alt="" />
                  </div>
                  Add Transaction
                </button>
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Notes</th>
                  <th></th>
                </tr>
                {transactions?.map((n) => (
                  <Transaction
                    transaction={n}
                    key={n.id}
                    setEditFlag={setEditFlag}
                    setEditForm={setEditForm}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
