class AdopterController < ApplicationController

    def index
        adopters = Adopter.all
        render json: adopters
    end

    def create
        user = Rescue.find_by(id: session[:user_id])
        if user.nil?
            render json: {error: "Not authorized. Sign in before adding adopters."}, status: :unauthorized
        #     return
        # end
        else
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
    end

    def delete 
        user = Rescue.find_by(id: session[:user_id])
        if user 
            adopter = Adopter.find_by(id: params[:id])
            if adopter 
                adopter.destroy 
                render json: {message: "Adopter deleted successfully"}, status: :ok
            else 
                render json: {error: ["Adopter not found"]}, status: :not_found
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