class AddYposToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :ypos, :integer
  end
end
