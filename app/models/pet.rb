class Pet < ApplicationRecord
    belongs_to :adopter
    belongs_to :rescue
end
