import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
