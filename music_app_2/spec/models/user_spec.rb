require 'spec_helper'

describe User do
  subject(:user) do
    FactoryGirl.build(:user)
      email: "fake_email@email.com"
      passowrd: "good_password"
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(15) }

  describe "::find_by_credentials" do
    it "returns user if user exists and password is correct"
    it "returns nil if either condition is not true"
  end

  describe "#is_password?" do
    it "returns true if the password digest is the password"
    it "returns false otherwise"
  end

  describe "#reset_session_token" do
    it "changes user's session token to a new one"
    it "saves the new session token in the database"
    it "returns the new session token"
  end

end
