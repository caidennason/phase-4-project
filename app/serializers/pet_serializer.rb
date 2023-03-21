class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :image_url, :age
  belongs_to :rescue
  belongs_to :adopter
end
