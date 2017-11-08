class ExpensesController < ApplicationController
  def index
      render(
        status: 200,
        json: Expense.limit(100)
      )
  end

  def new
    @expense=Expense.new
  end

  def create
    @expense = Expense.create(params)
  end
end
