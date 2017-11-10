require 'pry'

class IncomeController < ApplicationController
  def index
      render(
        status: 200,
        json: Income.limit(100)
      )
  end


  def create

    income = Income.create(income_params)

    if income.valid?
      render json: income, status: 201
    else
      render json: {}, status: 400
    end
  end



  private
  def income_params
    params.require(:income).permit(:earnedIncome, :netInvestedAssets, :taxRate, :roi, :id)
  end
end
