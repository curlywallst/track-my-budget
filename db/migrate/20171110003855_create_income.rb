class CreateIncome < ActiveRecord::Migration[5.1]
  def change
    create_table :incomes do |t|
      t.integer :earnedIncome
      t.integer :netInvestedAssets
      t.integer :taxRate
      t.integer :roi
    end
  end
end
