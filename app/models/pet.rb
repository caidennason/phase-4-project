class Pet < ApplicationRecord
    validates :name, presence: true
    validates :bio, presence: true 
    validates :age, presence: true
    belongs_to :adopter, optional: true
    belongs_to :rescue, optional: true
end
