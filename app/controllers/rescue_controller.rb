class RescueController < ApplicationController

    def index
        rescues = Rescue.all
        render json: rescues
    end
end