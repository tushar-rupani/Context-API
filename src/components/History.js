import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const History = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <li className={transaction.amount < 0 ? "minus" : "plus"} key={index}>
            {transaction.text} <span>{transaction.amount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;
