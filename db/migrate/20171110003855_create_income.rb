class CreateIncome < ActiveRecord::Migration[5.1]
  def change
    create_table :incomes do |t|
      t.float :earnedIncome
      t.float :netInvestedAssets
      t.float :taxRate, precision: 2
      t.float :roi, precision: 2
    end
  end
end
