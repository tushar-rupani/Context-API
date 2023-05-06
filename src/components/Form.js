import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions, addTransaction } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      id: transactions.length + 1,
      text,
      amount: parseInt(amount),
    };
    setText("");
    setAmount(0);
    addTransaction(newObject);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default Form;
