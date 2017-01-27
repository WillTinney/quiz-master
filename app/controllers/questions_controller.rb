class QuestionsController < ApplicationController
  before_action :set_user

  def index
    @questions = @user.questions.all
  end

  def new
    @question = @user.questions.build
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
