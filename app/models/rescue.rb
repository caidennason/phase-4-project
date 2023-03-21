class Rescue < ApplicationRecord
    validates :name, presence: true 
    validates :bio, presence: true
    validates :location, presence: true
    has_many :pets 
    has_many :rescues, through: :pets 
    has_secure_password
end
