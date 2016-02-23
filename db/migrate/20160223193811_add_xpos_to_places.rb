class AddXposToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :xpos, :integer
  end
end
