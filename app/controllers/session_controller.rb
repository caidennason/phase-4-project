class SessionController < ApplicationController
    def create
        user = Rescue.find_by(username: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["invalid username or password"]}, status: :unauthorized
        end
    end

    def show
        user = Rescue.find_by(id: session[:user_id])
        if user
            render json: user 
        else
            render json: { error: "Not authorized" }
        end

        def destroy
            user = Rescue.find_by(id: session[:user_id])
            if user
                session.delete :user_id 
                head :no_content
            else
                render json: {errors: ["Not authorized"]}, status: :unauthorized 
            end
        end

end

# rails generate migration add_password_digest_to_rescues password_digest:string