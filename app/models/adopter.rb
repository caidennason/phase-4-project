class Adopter < ApplicationRecord
    validates :name, presence: true 
    validates :bio, presence: true
    validates :location, presence: true
    has_many :pets 
    has_many :adopters, through: :pets
end
