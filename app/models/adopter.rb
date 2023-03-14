class Adopter < ApplicationRecord
    has_many :pets 
    has_many :adopters, through: :pets
end
