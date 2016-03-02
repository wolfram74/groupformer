class CreateBoots < ActiveRecord::Migration
  def change
    create_table :boots do |t|

      t.timestamps null: false
    end
  end
end
