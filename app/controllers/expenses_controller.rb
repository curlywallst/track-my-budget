require 'pry'

class ExpensesController < ApplicationController
  def index
      render(
        status: 200,
        json: Expense.limit(100)
      )
  end


  def create
    binding.pry
    expense = Expense.create(params)
    render json: {}, status: 400
    
    if expense.valid?
      render json: expense, status: 201
    else
      render json: {}, status: 400
    end
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
