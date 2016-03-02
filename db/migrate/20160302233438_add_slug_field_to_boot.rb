class AddSlugFieldToBoot < ActiveRecord::Migration
  def change
    add_column :boots, :slug, :string
  end
end
