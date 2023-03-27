class RescueController < ApplicationController

    def index
        user = Rescue.find_by(id: session[:user_id])
        if user
            rescues = Rescue.all
            render json: rescues, include: :pets
        else
            render json: {error: "ERROR: You must be signed in to view rescues."}
        end
    end

    def create
        if params[:password] == params[:password_confirmation]
            resc = Rescue.create(rescue_params)
                if resc.valid?
                    session[:user_id] = resc.id
                    render json: resc, status: :created
                else 
                    render json: {error: "ERROR: All forms must be completed."}, status: :unprocessable_entity
                end
        else
            render json: {error: "Passwords didn't match"}, status: :unprocessable_entity
        end
    end

    def show
        resc = Rescue.find_by(id: session[:user_id])
        render json: resc
    end

    def delete 
        user = Rescue.find_by(id: session[:user_id])
        if user
            resc = Rescue.find_by(id: params[:id])
            if resc.id == user.id
                resc.destroy 
            # header :no_content
                render json: {message: 'Rescue successfully deleted'}, status: :ok 
            else
                render json: {error: "ERROR: You can only delete your own rescue."}, status: :not_found 
            end
        else
            render json: {error: "ERROR: Not Authorized. Either sign in, or make sure you are deleting a rescue that belongs to you."}, status: :unauthorized
        end
    end

    private
    def rescue_params
        params.permit(:name, :bio, :location, :image_url, :password, :password_confirmation)
    end
end