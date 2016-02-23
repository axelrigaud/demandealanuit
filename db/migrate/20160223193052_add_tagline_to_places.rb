class AddTaglineToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :tagline, :string
  end
end
