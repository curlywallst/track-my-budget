
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

  def update
    income = Income.find(income_params[:id])
    if income.save
      income.update(income_params)
      render json: Income.all, status:201
    else
      render json: {}, status: 400
    end
  end



  private
  def income_params
    params.require(:income).permit(:earnedIncome, :netInvestedAssets, :taxRate, :roi, :id)
  end
end
