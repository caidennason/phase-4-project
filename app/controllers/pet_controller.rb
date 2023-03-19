class PetController < ApplicationController

    def index
        pets = Pet.all
        render json: pets
    end

    def show
        pet = Pet.find(params[:id])
        render json: pet
    end

    # def create
    #     pet = Pet.create!(pet_params)
    #     render json: pet, status: :created
    # end

    def create
        user = Rescue.find_by(id: session[:user_id])
        if user 
            pet = user.pets.create(pet_params)
            render json: pet, status: :created
        else 
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    
    private

    def pet_params
        params.permit(:name, :bio, :image_url, :age)
    end

end