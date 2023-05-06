import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [
    { id: 1, text: "ABCD", amount: 200 },
    { id: 2, text: "XYZ", amount: -200 },
    { id: 3, text: "FYH", amount: -20 },
    { id: 4, text: "TYU", amount: 40 },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (data) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: data,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
