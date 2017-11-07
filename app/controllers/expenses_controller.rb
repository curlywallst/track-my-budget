class ExpensesController < ApplicationController
  def index
      render(
        status: 200,
        json: Expense.limit(100)
      )
  end
end
