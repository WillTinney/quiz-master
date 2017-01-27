class QuestionTest < ActiveSupport::TestCase
  test "loads correctly" do
    visit "/users/1/questions"
    assert_equal 200, page.status_code
  end

  test "each question list item has 2 components" do
    visit "/users/1/questions"
    assert page.has_selector?('.question', count: User.find(1).questions.count)
    assert page.has_selector?('.question-answer', count: User.find(1).questions.count)
    # save_and_open_screenshot
  end
end
