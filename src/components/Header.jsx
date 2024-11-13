import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Header = ({ income, expense, budget }) => {
  return (
    <>
      <header className="flex justify-center align-center">
        <h2>My Expense Tracker</h2>
      </header>
      <div className="display-values flex space-around align-center">
        <div className="flex column align-center ExpenseDiv">
          <h2>Expense</h2>
          <h2 id="Expense-value">{expense}</h2>
        </div>
        <div className="flex column align-center IncomeDiv">
          <h2>Income</h2>
          <h2 id="Income-value">{income}</h2>
        </div>
        <div className="flex column align-center BudgetDiv">
          <h2>Budget</h2>
          <h2 id="Budget-value">{budget}</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
