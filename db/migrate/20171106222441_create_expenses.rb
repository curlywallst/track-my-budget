class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :name
      t.string :category
      t.integer :monthlyAmount
      t.integer :annualAmount

      t.timestamps
    end
  end
end
