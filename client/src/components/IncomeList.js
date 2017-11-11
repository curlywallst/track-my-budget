import React from 'react';

const IncomeList = ({ income }) => {
  var renderIncome=<div></div>
  if (Object.keys(income).length > 0) {
  renderIncome=
      <div>
        <p>Annual Pre-Tax Earned Income: {income[0].earnedIncome.formatMoney(2)}</p>
        <p>Tax Rate: {income[0].taxRate}%</p>
        <div><strong>After-Tax Earned Income: </strong>{(income[0].earnedIncome*(1-income[0].taxRate/100)).formatMoney(2)}</div>
        <br></br>
        <p>Net Invested Assets: {income[0].netInvestedAssets.formatMoney(2)}</p>
        <p>Assumed Rate of Return on Investments: {income[0].roi}%</p>
        <div><strong>Before-Tax Investment Returns: </strong>{(income[0].netInvestedAssets*(income[0].roi/100)).formatMoney(2)}</div>

      </div>
    }


  return (
    <div>
      {renderIncome}
    </div>
  );
};

  Number.prototype.formatMoney = function(c, d, t){
  var n = this,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
     return s + "$" + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
   };

export default IncomeList;
