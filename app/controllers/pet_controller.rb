class PetController < ApplicationController

    def index
        pets = Pet.all
        render json: pets
    end

    
    private

    def pet_params
        params.permit(:name, :bio, :image_url, :age)
    end

end