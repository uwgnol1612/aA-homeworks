class UsersController < ApplicationController

    def new
        @user = User.new 
        render :new 
    end 

    def create
        @user = User.new(user_pramas)
        
        if @user.save
            log_in_user!(@user)
            redirect_to bands_url
        else 
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end 
    end 

    def show 
        @user = User.find(params[:id])
        render :show
    end 


    private 

    def user_pramas
        params.require(:user).permit(:email, :password)
    end 

end 