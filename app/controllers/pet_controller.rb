class PetController < ApplicationController

    def index
        user = Rescue.find_by(id: session[:user_id])
        if user
            pets = Pet.all
            render json: pets
        else
            render json: { error: "Sign in to see the pets"}, status: :unauthorized
        end
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
                render json: {error: "ERROR: Name, bio and age must exist."}, status: :unprocessable_entity
            end
        else 
            render json: {error: "ERROR: Not authorized. Must sign in."}, status: :unauthorized
        end
    end

    def delete
        user = Rescue.find_by(id: session[:user_id])
        if user
        pet = Pet.find_by(id: params[:id])
        if pet.rescue_id == user.id
            pet.destroy
            render json: { message: "Pet deleted successfully" }, status: :ok
        else
            render json: {error: ["ERROR: Not authorized. You can only delete pets your rescue is responsible for."]}, status: :unauthorized
        end
    else
        render json: {error: "ERROR: Not authorized. Must sign in to delete pet, or delete the pet your rescue is responsible for."}, status: :unauthorized
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
            render json: {error: "ERROR: Not authorized. Must sign in to update, or update the pet your rescue is responsible for."}, status: :unauthorized
        end
    end

    
    private

    def pet_params
        params.permit(:name, :bio, :image_url, :age, :rescue_id, :adopter_id)
    end

end