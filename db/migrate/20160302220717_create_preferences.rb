class CreatePreferences < ActiveRecord::Migration
  def change
    create_table :preferences do |t|
      t.integer :boot_id
      t.integer :project_id
      t.integer :rank
      t.timestamps null: false
    end
  end
end
