require 'rails_helper'

RSpec.describe Question, type: :model do

  before(:all) do
    @question = Question.new(content: "What number is the Roman Numeral, 'V'?", answer: "five")
  end

  it "Question should have the right content" do
    expect(@question.content).to eq("What number is the Roman Numeral, 'V'?")
  end

  it "Question should have the right answer" do
    expect(@question.answer).to eq("five")
  end

end
