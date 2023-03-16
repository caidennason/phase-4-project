class RescueController < ApplicationController

    def index
        rescues = Rescue.all
        render json: rescues
    end

    def create
        resc = Rescue.create!(name: params[:name], bio: params[:bio], location: params[:location], image_url: params[:image_url])
        render json: resc, status: :created
    end

    private
    def rescue_params
        params.permit(:name, :bio, :location, :image_url)
    end
end