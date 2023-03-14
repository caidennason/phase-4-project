# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rescue1 = Rescue.create!(name: "True North", bio: "Brooklyn, NY based animal rescue with dogs and cats.", location: "Brooklyn, NY", image_url: "https://i.imgur.com/CGOCDTU.png")
rescue2 = Rescue.create!(name: "Animal Haven", bio: "Manhattan, NY based animal rescue with dogs and cats.", location: "Manhattan, NY", image_url: "https://i.imgur.com/QtfiWe5.png")

adopter1 = Adopter.create!(name: "Caiden", bio: "Caiden is a 28 year old who has lots of experience with dogs.", location: "Brooklyn, NY", image_url: "https://i.imgur.com/sx0G6xQ.jpg")
adopter2 = Adopter.create!(name: "Kimberly", bio: "Kimberly is a 31 year old who loves dogs.", location: "Brooklyn, NY", image_url: "https://i.imgur.com/9lzRjPi.jpg")

pet1 = Pet.create!(name: "Winoa", bio: "Winoa is a lab mix from Puerto Rico. She's very sweet and loves the water!", image_url: "https://i.imgur.com/31uEVZl.jpg", age: 5, rescue_id: 2, adopter_id: 2)
pet2 = Pet.create!(name: "Frankie", bio: "Frankie is a suspected border collie german sheperd mix. She loves dirt!", image_url: "https://i.imgur.com/BzfHJ1p.jpg", age: 1, rescue_id: 1, adopter_id: 1)