class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :name
      t.string :category
      t.float :monthlyAmount, precision: 2
      t.float :annualAmount, precision: 2

      t.timestamps
    end
  end
end
