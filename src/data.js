let transactions = [];

export const addTransaction = (transaction) => {
  transactions.push(transaction);
};

export const getTransactions = () => {
  return transactions;
};
