class AdopterController < ApplicationController

    def index
        adopters = Adopter.all
        render json: adopters
    end
end