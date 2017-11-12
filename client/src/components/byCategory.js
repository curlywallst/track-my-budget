import React from 'react';
import ReactTable from 'react-table'
import _ from "lodash";

const ByCategoryList = ({ expenses }) => {
  var renderExpenses = []
  expenses.map(expense =>
    (expense !== undefined)? renderExpenses.push(expense): "")
  
  var categories = []
  categories = renderExpenses.map(expense =>
    categories.push(expense.category)
  var categories = expenses.filter(function(item, pos){
    return categories.indexOf(item)== pos;
  });

  console.log( categories );

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
                {_.sum(_.map(renderExpenses, d => parseInt(d.monthlyAmount, 10))).formatMoney(2)}
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
                {_.sum(_.map(renderExpenses, d => d.annualAmount)).formatMoney(2)}
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

export default ByCategoryList;
