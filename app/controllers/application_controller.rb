class ApplicationController < ActionController::API
  include ActionController::Cookies

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    Rescue.find_by_id(session[:user_id])
  end

end
