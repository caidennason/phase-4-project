class PetController < ApplicationController

    def index
        pets = Pet.all
        render json: pets
    end

    def show
        pet = Pet.find(params[:id])
        render json: pet
    end

    def create
        user = Rescue.find_by(id: session[:user_id])
        if user 
            pet = user.pets.create(pet_params)
            if pet.valid?
                render json: pet, status: :created
            else
                render json: {error: "Not long enough"}, status: :unprocessable_entity
            end
        else 
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def delete
        user = Rescue.find_by(id: session[:user_id])
        if user
        pet = Pet.find_by(id: params[:id])
        if pet
            pet.destroy
            render json: { message: "Pet deleted successfully" }, status: :ok
        else
            render json: {error: ["Pet not found"]}, status: :not_found
        end
    end
    end

    def update
        user = Rescue.find_by(id: session[:user_id])
        if user 
            pet = Pet.find_by(id: params[:id])
            if pet 
                pet.update(pet_params)
                render json: pet, status: :created
            else
                render json: { error: ["Pet not found."]}, status: :not_found
            end
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    
    private

    def pet_params
        params.permit(:name, :bio, :image_url, :age, :rescue_id)
    end

end