class AddImageFileNameToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :image_file_name, :string
  end
end
