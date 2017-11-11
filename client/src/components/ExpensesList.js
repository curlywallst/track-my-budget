import React from 'react';
import ReactTable from 'react-table'
import _ from "lodash";

const ExpensesList = ({ expenses }) => {
  var renderExpenses = []
  expenses.map(expense =>
    (expense !== undefined)? renderExpenses.push(expense): "")

  const columns = [{
    Header: 'Id',
    accessor: 'id' // String-based value accessors!
  },{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Category',
    accessor: 'category',
  }, {
    Header: 'Monthly Amount',
    accessor: 'monthlyAmount',
    Footer: (
              <span>
                <strong>Total:</strong>{" "}
                {_.sum(_.map(renderExpenses, d => parseInt(d.monthlyAmount, 10)))}
              </span>
              )
  }, {
    Header: 'Annual Amount',
    accessor: 'annualAmount',
    Footer: (
              <span>
                <strong>Total:</strong>{" "}
                {_.sum(_.map(renderExpenses, d => d.annualAmount))}
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
              id: "category",
              desc: true
            }
          ]}
        defaultPageSize={20}
        style={{
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
      />
    </div>
  );
};

export default ExpensesList;
