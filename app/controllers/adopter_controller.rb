class AdopterController < ApplicationController

    before_action :authorized

    def index
        user = Rescue.find_by(id: session[:user_id])
        if user
            adopters = Adopter.all
            render json: adopters
        else
            render json: {error: "ERROR: You must sign in to view adopters."}, status: :unauthorized
        end
    end

    # def create
    #     user = Rescue.find_by(id: session[:user_id])
    #     if user.nil?
    #         render json: {error: "Not authorized. Sign in before adding adopters."}, status: :unauthorized
    #     #     return
    #     # end
    #     else
    #         adopter = Adopter.create!(adopter_params)
    #         if adopter.valid?
    #             render json: adopter, status: :ok
    #         else
    #             render json: {error: 'Make sure all fields are completed'}, status: :unprocessable_entity 
    #         end
    #     # else
    #     #     render json: {error: "Not authorized"}, status: :unauthorized
    #     # end
    #     end
    # end

    def create 
        user = Rescue.find_by(id: session[:user_id])
        if user 
            adopter = Adopter.create(adopter_params)
            if adopter.valid? 
                render json: adopter, status: :created 
            else 
                render json: {error: "ERROR: Name, bio and location must exist."}, status: :unprocessable_entity
            end
        else 
            render json: {error: "ERROR: Not authorized. Must sign in"}, status: :unauthorized
        end
    end

    def delete 
        user = Rescue.find_by(id: session[:user_id])
        if user 
            adopter = Adopter.find_by(id: params[:id])
            if adopter 
                adopter.destroy 
                render json: {message: "Adopter deleted successfully"}, status: :ok
            else 
                render json: {error: "Adopter not found"}, status: :not_found
            end
        else
            render json: {error: "ERROR: You must sign in."}, status: :unauthorized
        end
    end

    private

    def adopter_params
        params.permit(:name, :bio, :location, :image_url)
    end
end