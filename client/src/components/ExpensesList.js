import React from 'react';
import ReactTable from 'react-table'
import _ from "lodash";

const ExpensesList = ({ expenses }) => {
  var renderExpenses = []
  expenses.map(expense =>
    (expense !== undefined)? renderExpenses.push(expense): "")

  const columns = [{
    Header: 'Id',
    width: 75,
    accessor: 'id' // String-based value accessors!
  }, {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Category',
    accessor: 'category',
  }, {
    Header: 'Monthly Amount',
    accessor: 'monthlyAmount',
    width: 200,
    Footer: (
              <span>
                <strong>Total:</strong>{" "}
                {formatMoney(_.sum(_.map(renderExpenses, d => parseInt(d.monthlyAmount, 10))))}
              </span>
              )
  }, {
    Header: 'Annual Amount',
    accessor: 'annualAmount',
    width: 200,
    style: {},
    Footer: (
              <span>
                <strong>Total:</strong>{" "}
                {formatMoney(_.sum(_.map(renderExpenses, d => d.annualAmount)))}
              </span>
              )
  }]
  return (
    <div>
      <ReactTable
        data={renderExpenses}
        noDataText="No Expenses Entered"
        columns={columns}
        defaultSorted={[
            {
              id: "id",
              asc: true
            }
          ]}
        defaultPageSize={100}
        style={{
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
      />
    </div>
  );
};

function formatMoney(n){
  let i = String(parseInt(n.toFixed(2), 10))
  let l = i.length
  let j = (l > 3) ? l % 3 : 0;
  return "$" + (j ? i.substr(0, j) + "," : "") + i.substr(j).replace(/("."{3})(?=".")/g, "$1,") + ("." + Math.abs(n - i).toFixed(2).slice(2));
 };


export default ExpensesList;
