require 'rails_helper'

RSpec.describe User, type: :model do
  before(:all) do
    @user = User.new(email: "test@gmail.com", password: "password")
  end

  it "User should have the correct email" do
    expect(@user.email).to eq("test@gmail.com")
  end

  it "User should be redirected to show page on sign-in" do

  end

end
