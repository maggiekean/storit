class SessionsController < ApplicationController
 skip_before_filter :signed_in_user
  def new
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # Sign the user in and redirect to the user's show page.
      sign_in user 
      flash[:success] = "Welcome #{current_user.name}"
      redirect_to '/edit'
    else
      flash[:error] = 'Invalid email/password combination' # Not quite right!
      render 'new'
    end
  end

  def destroy
    sign_out
    flash[:success] = "Goodbye."
    redirect_to '/signin'
  end
end