class PetController < ApplicationController

    def index
        pets = Pet.all
        render json: pets
    end

end