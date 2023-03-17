class RescueController < ApplicationController

    def index
        rescues = Rescue.all
        render json: rescues
    end

    def create
        resc = Rescue.create(rescue_params)
        session[:user_id] = resc.id
        render json: resc, status: :created
    end

    def show
        resc = Rescue.find_by(id: session[:user_id])
        render json: user
    end

    private
    def rescue_params
        params.permit(:name, :bio, :location, :image_url, :password, :pasword_confirmation)
    end
end