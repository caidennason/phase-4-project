class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :location

  has_many :pets
end
