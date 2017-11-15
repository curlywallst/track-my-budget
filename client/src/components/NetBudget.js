import React from 'react';


const NetBudget = ({ expenses, income }) => {

  var monthlyExpTotal = 0;
  if (expenses.length > 0) {
    expenses.forEach(expense => monthlyExpTotal += expense.monthlyAmount)}

  var renderIncome=<div></div>
  if (income.length > 0) {
  var monthlyIncome = (income[0].earnedIncome*(1-income[0].taxRate/100))/12
  renderIncome=
      <div>
        <div><strong>Monthly After-Tax Monthly Earned Income:  </strong>{formatMoney(monthlyIncome)}</div>
        <div><strong>Remaining Monthly Budget Amount: </strong>{formatMoney(monthlyIncome-monthlyExpTotal)}</div>
      </div>
    }


  return (
    <div>
      {renderIncome}
    </div>
  );
};

  function formatMoney(n){
    let i = String(parseInt(n.toFixed(2), 10))
    let l = i.length
    let j = (l > 3) ? l % 3 : 0;
    return "$" + (j ? i.substr(0, j) + "," : "") + i.substr(j).replace(/("."{3})(?=".")/g, "$1,") + ("." + Math.abs(n - i).toFixed(2).slice(2));
   };

export default NetBudget;
