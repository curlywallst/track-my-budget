import React from 'react';

const IncomeList = ({ income }) => {
  var renderIncome=<div></div>
  if (Object.keys(income).length > 0) {
  renderIncome=
      <div>
        <p>Annual Pre-Tax Earned Income: {formatMoney(income[0].earnedIncome)}</p>
        <p>Tax Rate: {income[0].taxRate}%</p>
        <div><strong>After-Tax Earned Income: </strong>{formatMoney(income[0].earnedIncome*(1-income[0].taxRate/100))}</div>
        <br></br>
        <p>Net Invested Assets: {formatMoney(income[0].netInvestedAssets)}</p>
        <p>Assumed Rate of Return on Investments: {income[0].roi}%</p>
        <div><strong>Before-Tax Investment Returns: </strong>{formatMoney((income[0].netInvestedAssets*(income[0].roi/100)))}</div>

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

export default IncomeList;
