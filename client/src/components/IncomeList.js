import React from 'react';

const IncomeList = ({ income }) => {
  var renderIncome=<div></div>
  if (Object.keys(income).length > 0) {
  renderIncome=
      <div>
        <p><strong>Annual Pre-Tax Earned Income: </strong>${income[0].earnedIncome}</p>
        <p><strong>Net Invested Assets: </strong>${income[0].netInvestedAssets}</p>
        <p><strong>Tax Rate: </strong>{income[0].taxRate}%</p>
        <p><strong>Assumed Return on Investment: </strong>{income[0].roi}%</p>
      </div>
    }


  return (
    <div>
      {renderIncome}
    </div>
  );
};

export default IncomeList;
