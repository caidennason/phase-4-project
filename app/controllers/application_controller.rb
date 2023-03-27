class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    Rescue.find_by_id(session[:user_id])
  end

  def authorized
    render json: {error: "You must be loggin in to access this page."}, status: :unauthorized unless logged_in?
    return
  end

end
