import React, { useState, useRef } from "react";
import "./App.css";
import Transaction from "./Transaction";
import { addTransaction, getTransactions } from "./data";

function Balance() {
  const [bala, setBala] = useState({ income: 30000, expense: 500 });
  const [transactions, setTransactions] = useState(getTransactions());
  const dialogIncomeRef = useRef(null);
  const dialogExpenseRef = useRef(null);

  const showExpenseDialog = () => {
    dialogExpenseRef.current.showModal();
  };

  const showIncomeDialog = () => {
    dialogIncomeRef.current.showModal();
  };

  const submitExpense = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const amount = parseFloat(formData.get("amount"));
    const description = formData.get("description");
    const date = formData.get("date");

    const newExpense = bala.expense + amount;
    setBala((prevState) => ({ ...prevState, expense: newExpense }));

    const transaction = { type: "Expense", amount, description, date };
    addTransaction(transaction);
    setTransactions(getTransactions());

    dialogExpenseRef.current.close();
  };

  const submitIncome = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const amount = parseFloat(formData.get("amount"));
    const date = formData.get("date");

    const newIncome = bala.income + amount;
    setBala((prevState) => ({ ...prevState, income: newIncome }));

    const transaction = { type: "Income", amount, date };
    addTransaction(transaction);
    setTransactions(getTransactions());

    dialogIncomeRef.current.close();
  };

  return (
    <>
      <div>
        <h1>Total Balance: {bala.income - bala.expense}</h1>
        <h2>Income: {bala.income}</h2>
        <h2>Expense: {bala.expense}</h2>
      </div>
      <div>
        <div>
          <button onClick={showExpenseDialog}>Add Expense</button>
          <dialog ref={dialogExpenseRef}>
            <form className="expform" onSubmit={submitExpense}>
              <label>
                What did you spend on:{" "}
                <input type="text" name="description" required />
              </label>
              <br />
              <label>
                Amount spent: <input type="number" name="amount" required />
              </label>
              <br />
              <label>
                Date: <input type="date" name="date" required />
              </label>
              <br />
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => dialogExpenseRef.current.close()}
              >
                Close
              </button>
            </form>
          </dialog>
        </div>
        <div>
          <button onClick={showIncomeDialog}>Add Income</button>
          <dialog ref={dialogIncomeRef}>
            <form className="expform" onSubmit={submitIncome}>
              <label>
                How much did you receive:{" "}
                <input type="number" name="amount" required />
              </label>
              <br />
              <label>
                Date: <input type="date" name="date" required />
              </label>
              <br />
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => dialogIncomeRef.current.close()}
              >
                Close
              </button>
            </form>
          </dialog>
        </div>
        <div>
          <Transaction transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default Balance;
