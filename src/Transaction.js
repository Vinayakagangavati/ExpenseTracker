import React from "react";

const Transaction = ({ transactions }) => {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type}: {transaction.description || ""} $
            {transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transaction;
