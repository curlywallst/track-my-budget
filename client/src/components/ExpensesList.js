import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import _ from "lodash";

const ExpensesList = ({ expenses }) => {
  const renderExpenses = expenses
  renderExpenses.map(expense =>
        expense.name = <Link key={expense.id} to={`/expenses/${expense.id}`}>{expense.name}</Link>
      );
  const columns = [{
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
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default ExpensesList;
