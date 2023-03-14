class CreateAdopters < ActiveRecord::Migration[6.1]
  def change
    create_table :adopters do |t|
      t.string :name
      t.string :bio
      t.string :location
      t.string :image_url

      t.timestamps
    end
  end
end
