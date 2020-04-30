import React from 'react';
export default (expenses) => {
  return expenses.map((expenses) => expenses.amount).reduce((sum,value) => sum + value,0);
};
/* sumExpense = ({expenses}) => (
  const totalAmount = expenses.reduce((totalAmt,expenses) => totalAmt + parseInt(expense.amount,10),0)
);
*/
