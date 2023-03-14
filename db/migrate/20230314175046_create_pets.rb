class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :bio
      t.string :image_url
      t.integer :age
      t.integer :rescue_id
      t.integer :adopter_id

      t.timestamps
    end
  end
end
