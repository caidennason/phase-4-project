class Rescue < ApplicationRecord
    has_many :pets 
    has_many :rescues, through: :pets 
    has_secure_password
end
