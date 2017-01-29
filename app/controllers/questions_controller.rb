class QuestionsController < ApplicationController
  before_action :set_user
  before_action :set_question, only: [ :edit, :update, :destroy ]

  def index
    @questions = policy_scope(Question).order(created_at: :desc)
  end

  def new
    @question = @user.questions.build
    authorize @question
  end

  def create
    @question = @user.questions.create!(question_params)
    authorize @question
    if @question.save
      redirect_to user_questions_path(@user)
    else
      render :new
    end
  end

  def edit
    authorize @question
  end

  def update
    authorize @question
    if @question.update(question_params)
      redirect_to user_questions_path(@user)
    else
      render :edit
    end
  end

  def destroy
    authorize @question
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
