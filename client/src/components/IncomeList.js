import React from 'react';

const IncomeList = ({ income }) => {
  var renderIncome=<div></div>
  if (Object.keys(income).length > 0) {
  renderIncome=
      <div>
        <p><strong>Annual Earned Income: </strong>${income[0].earnedIncome}</p>
        <p><strong>Net Invested Assets: </strong>${income[0].netInvestedAssets}</p>
      </div>
    }


  return (
    <div>
      {renderIncome}
    </div>
  );
};

export default IncomeList;
