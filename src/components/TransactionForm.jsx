import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const TransactionForm = ({ setAddFlag, setEditFlag, edit }) => {
  const [error, setError] = useState("");
  const [transactionForm, setTransactionForm] = useState({
    type: "",
    amount: "",
    date: "",
    notes: "",
  });

  return (
    <div className="input-fields flex column justify-center">
      <div className="flex align-center space-between">
        <label>Type:</label>
        <br />
        <div className="flex align-center space-between">
          <label>Expense</label>
          <input
            type="radio"
            name="type"
            value="Expense"
            onChange={(e) => {
              setTransactionForm((prev) => {
                return {
                  ...prev,
                  type: e.target.value,
                };
              });
            }}
          />
          <label>Income</label>
          <input
            type="radio"
            name="type"
            value="Income"
            onChange={(e) => {
              setTransactionForm((prev) => {
                return {
                  ...prev,
                  type: e.target.value,
                };
              });
            }}
          />
        </div>
      </div>

      <div className="flex align-center space-between">
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Amount in $"
          id="amount"
          required
          onChange={(e) => {
            setTransactionForm((prev) => {
              return {
                ...prev,
                amount: e.target.value,
              };
            });
          }}
        />
      </div>

      <div className="flex align-center space-between">
        <label>Date:</label>
        <input
          type="date"
          id="date"
          placeholder="Date of transaction"
          required
          onChange={(e) => {
            setTransactionForm((prev) => {
              return {
                ...prev,
                date: e.target.value,
              };
            });
          }}
        />
      </div>
      <div className="flex align-center space-between">
        <label>Notes:</label>
        <input
          type="text"
          id="notes"
          placeholder="Notes"
          onChange={(e) => {
            setTransactionForm((prev) => {
              return {
                ...prev,
                notes: e.target.value,
              };
            });
          }}
        />
      </div>
      {error && <span className="error-message"></span>}
      {!edit && (
        <button
          id="submit"
          onClick={async () => {
            let id = JSON.parse(localStorage.userId);
            if (
              !transactionForm.type ||
              !transactionForm.amount ||
              !transactionForm.date ||
              !transactionForm.notes
            ) {
              setError("Please fill out all fields.");
              return;
            }
            const body = new FormData();
            body.append("type", transactionForm.type);
            body.append("amount", transactionForm.amount);
            body.append("date", transactionForm.date);
            body.append("notes", transactionForm.notes);
            body.append("userId", id);
            try {
              const response = await axios(
                "http://localhost/expense-tracker-3/server-side/createTransaction.php",
                {
                  method: "post",
                  headers: { "Content-Type": "multipart/form-data" },
                  data: body,
                }
              );
              if (response.data.message === "Successfully added row") {
                console.log("Added transaction");
                setAddFlag(false);
              }
            } catch (error) {
              console.log(error);
              setError(error);
            }
          }}
        >
          Submit
        </button>
      )}
      {edit && (
        <button
          id="save-changes"
          className="save"
          onClick={async () => {
            let id = JSON.parse(localStorage.userId);
            if (
              !transactionForm.type ||
              !transactionForm.amount ||
              !transactionForm.date ||
              !transactionForm.notes
            ) {
              setError("Please fill out all fields.");
              return;
            }
            const body = new FormData();
            body.append("type", transactionForm.type);
            body.append("amount", transactionForm.amount);
            body.append("date", transactionForm.date);
            body.append("notes", transactionForm.notes);
            body.append("userId", id);
            try {
              const response = await axios(
                "http://localhost/expense-tracker-3/server-side/editTransaction.php",
                {
                  method: "post",
                  headers: { "Content-Type": "multipart/form-data" },
                  data: body,
                }
              );
              if (response.data.message === "successful") {
                console.log("editted transaction");
                setEditFlag(false);
              }
            } catch (error) {
              console.log(error);
              setError(error);
            }
          }}
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default TransactionForm;
