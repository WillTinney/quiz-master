class UsersController < ApplicationController
  before_action :set_user, only: [ :test ]

  def test
    @questions = @user.questions.all
    authorize @user
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

end
