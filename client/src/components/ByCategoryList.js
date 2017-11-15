import React from 'react';
import ReactTable from 'react-table'
import _ from "lodash";
import ExpensesList from './ExpensesList'

const ByCategoryList = ({ expenses }) => {
  var renderExpenses = []
  expenses.map(expense =>
    (expense !== undefined)? renderExpenses.push(expense): "")

  if (renderExpenses.length >0 ) {
    var categories = []
    renderExpenses.forEach(function(expense) {
      categories.push(expense.category)})
    var uniqueCategories = categories.filter(function(item, pos){
        return categories.indexOf(item) === pos;
    });

    var renderCategories = []
    uniqueCategories.forEach(function(cat) {
      var categoryExpenses = renderExpenses.filter(function(exp){
        return (exp.category === cat)
      })
      var monthlyAmt = sumProp(categoryExpenses, "monthlyAmount")
      var catObj = { category: cat, monthlyAmount: monthlyAmt, annualAmount: monthlyAmt*12, categoryExpenses: categoryExpenses }
      renderCategories.push(catObj)
    })
  }

  const categoryColumns = [{
    Header: 'Category',
    accessor: 'category',
  }, {
    Header: 'Monthly Amount',
    accessor: 'monthlyAmount',
    width: 200,
    Footer: (
              <span>
                <strong>Total:</strong>{" "}
                {formatMoney(_.sum(_.map(renderCategories, d => parseInt(d.monthlyAmount, 10))))}
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
                {formatMoney(_.sum(_.map(renderCategories, d => (parseInt(d.annualAmount, 10)))))}
              </span>
              )
  }]

  return (
    <div>
      <ReactTable
        data={renderCategories}
        noDataText="No Expenses Entered"
        columns={categoryColumns}
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
        SubComponent={row => {
            return (
              <ExpensesList expenses={row.original.categoryExpenses}/>
            )}}
      />
    </div>
  );
};

function sumProp(arr,prop){
  var total = 0
  for ( var i = 0, _len = arr.length; i < _len; i++ ) {
    total += arr[i][prop]
  }
  return total
}

function formatMoney(n){
  let i = String(parseInt(n.toFixed(2), 10))
  let l = i.length
  let j = (l > 3) ? l % 3 : 0;
  return "$" + (j ? i.substr(0, j) + "," : "") + i.substr(j).replace(/("."{3})(?=".")/g, "$1,") + ("." + Math.abs(n - i).toFixed(2).slice(2));
 };

export default ByCategoryList;
