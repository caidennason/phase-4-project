class Rescue < ApplicationRecord
    validates :name, presence: true 
    validates :bio, presence: true
    validates :location, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    has_many :pets 
    has_many :rescues, through: :pets 
    has_secure_password
end
