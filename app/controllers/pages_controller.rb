class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [ :home ]

  def home
    redirect_to user_questions_path(current_user) if current_user
  end
end
