class CreateBoots < ActiveRecord::Migration
  def change
    create_table :boots do |t|
      t.string :name
      t.string :email
      t.integer :cohort_id
      t.timestamps null: false
    end
  end
end
