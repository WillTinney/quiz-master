require 'rails_helper'

RSpec.describe User, type: :model do

  before(:all) do
    @user = User.new(email: "test@gmail.com", password: "password")
  end

  it "User should have the correct email" do
    expect(@user.email).to eq("test@gmail.com")
  end

end
