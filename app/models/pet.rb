class Pet < ApplicationRecord
    belongs_to :adopter, optional: true
    belongs_to :rescue, optional: true
end
