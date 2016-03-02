class AddFieldsToCohort < ActiveRecord::Migration
  def change
    add_column :cohorts, :slug, :string
    add_column :cohorts, :instructor_email, :string
  end
end
