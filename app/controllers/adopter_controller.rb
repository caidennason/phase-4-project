class AdopterController < ApplicationController

    def index
        adopters = Adopter.all
        render json: adopters
    end

    def create
        user = Rescue.find_by(id: session[:user_id])
        if user.nil?
            render json: {error: "Not authorized."}, status: :unauthorized
            return
        end
            adopter = Adopter.create!(adopter_params)
            if adopter.valid?
                render json: adopter, status: :ok
            else
                render json: {error: 'Not long enough'}, status: :unprocessable_entity 
            end
        # else
        #     render json: {error: "Not authorized"}, status: :unauthorized
        # end
    end

    def delete 
        user = Rescue.find_by(id: session[:user_id])
        if user 
            adopter = Adopter.find_by(id: params[:id])
            if adopter 
                adopter.destroy 
                render json: {message: "Pet deleted successfully"}, status: :ok
            else 
                render json: {error: ["Pet not found"]}, status: :not_found
            end
        end
    end

    private

    def adopter_params
        params.permit(:name, :bio, :location, :image_url)
    end
end