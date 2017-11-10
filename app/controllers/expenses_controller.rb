
class ExpensesController < ApplicationController
  def index
      render(
        status: 200,
        json: Expense.limit(100)
      )
  end

  def create
    expense = Expense.create(expense_params)

    if expense.valid?
      render json: expense, status: 201
    else
      render json: {}, status: 400
    end
  end

  def update
    expense = Expense.find(expense_params[:id])
    if expense.save
      expense.update(expense_params)
      render json: Expense.all, status:201
    else
      render json: {}, status: 400
    end
  end

  def destroy
    puts expense_params
    expense = Expense.find(expense_params[:id])
    if expense.delete
      render json: { message: "expense deleted", success: 'ok'}
    else
      render json: Expense.all, status: 412
    end
  end


  private
  def expense_params
    params.require(:expense).permit(:name, :category, :monthlyAmount, :annualAmount, :id)
  end
end
