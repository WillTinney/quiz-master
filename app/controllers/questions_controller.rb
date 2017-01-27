class QuestionsController < ApplicationController
  before_action :set_user
  before_action :set_question, only: [ :edit, :update, :destroy ]

  def index
    @questions = @user.questions.all
  end

  def new
    @question = @user.questions.build
  end

  def create
    @question = @user.questions.create!(question_params)
    if @question.save
      redirect_to user_questions_path(@user)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @question.update(question_params)
      redirect_to user_questions_path(@user)
    else
      render :edit
    end
  end

  def destroy
    @question.destroy
    redirect_to user_questions_path(@user)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:content, :answer)
  end
end
