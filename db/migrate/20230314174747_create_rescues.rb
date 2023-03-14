class CreateRescues < ActiveRecord::Migration[6.1]
  def change
    create_table :rescues do |t|
      t.string :name
      t.string :bio
      t.string :location
      t.string :image_url

      t.timestamps
    end
  end
end
