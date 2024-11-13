import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const FilterForm = () => {
  return (
    <div className="flex row filter-fields">
      <div className="flex column justify-center">
        <div className="flex justify-center align-center">
          <label>Expense</label>
          <input type="radio" name="type" value="Expense" id="ExpenseFilter" />
        </div>
        <div className="flex justify-center align-center">
          <label for="type">Income</label>
          <input type="radio" name="type" value="Income" id="IncomeFilter" />
        </div>
      </div>
      <div className="flex column justify-center">
        <div className="flex space-between align-center">
          <label for="max">Below</label>
          <input type="number" id="max" placeholder="Below this Price" />
        </div>
        <div className="flex space-between align-center">
          <label for="minimum">Above</label>
          <input type="number" id="min" placeholder="Above this Price" />
        </div>
      </div>

      <div className="flex column justify-center">
        <div className="flex space-between align-center">
          <label for="beforeDate">Before</label>
          <input type="date" id="beforeDate" placeholder="Before this date" />
        </div>
        <div className="flex space-between align-center">
          <label for="afterDate">After</label>
          <input type="date" id="afterDate" placeholder="After this date" />
        </div>
      </div>

      <div className="flex column justify-center">
        <label for="search">Search notes</label>
        <input type="text" id="search" placeholder="Search a word" />
      </div>
      <div className="flex column justify-center">
        <button id="filterBtn">Filter</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
};

export default FilterForm;
