class AdopterController < ApplicationController

    def index
        adopters = Adopter.all
        render json: adopters
    end

    def create
        adopter = Adopter.create!(adopter_params)
        render json: adopter
    end

    private

    def adopter_params
        params.permit(:name, :bio, :location, :image_url)
    end
end