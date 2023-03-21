class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :location, :image_url

  has_many :pets
end
