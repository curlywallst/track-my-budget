require 'pry'

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



  private
  def expense_params
    params.require(:expense).permit(:name, :category, :monthlyAmount, :annualAmount, :id)
  end
end

# def create
#     routine = current_user.routines.create(routine_params)
#
#     if routine.valid?
#       render json: routine, include: ['groups.intervals'], status: 201
#     else
#       render json: {}, status: 400
#     end
#   end
