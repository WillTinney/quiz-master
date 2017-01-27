require 'rails_helper'

RSpec.feature "adding questions" do

  scenario "allow user to add a question" do

    visit new_user_question_path("1")

    fill_in "Content", with: "My Content"
    fill_in "Answer", with: "My Answer"

    click_on("Create Question")

    expect(page).to have_content("My Content")
    expect(page).to have_content("My Answer")
  end
end
