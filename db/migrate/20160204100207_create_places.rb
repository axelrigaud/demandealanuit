class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :title
      t.text :description
      t.string :youtube_link

      t.timestamps null: false
    end
  end
end
