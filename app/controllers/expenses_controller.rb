
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

  def destroy
    expense = Expense.find_by(id: expense_params[:id])

  if task.delete
    render json: { message: "expenxe deleted", success: 'ok'}
  else
    render json: {}, status: 412
  end

end




  private
  def expense_params
    params.require(:expense).permit(:name, :category, :monthlyAmount, :annualAmount, :id)
  end
end
