require 'rails_helper'

describe User do
  subject(:user) {User.new(email: "hunter2@gamil.com", password: "hunter2")} 

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6)}

  it "create a password digest when a password is given" do   
    expect(user.password_digest).to_not be_nil
  end 

  it "creates a session token before validation" do 
    expect(user.session_token).to_not be_nil
  end
  
  describe "#reset_session_token!" do
    it "sets a new session token to user" do 
      old_session_token = user.session_token 
      user.reset_session_token! 
      expect(user.session_token).to_not eq(old_session_token)
    end 
    
    it "returns the new session token" do 
      expect(user.reset_session_token!).to eq(user.session_token)
    end 
  end 

  describe "#is_password?" do 
    it "verifies the password is correct" do   
      expect(user.is_password?("hunter2")).to be true
    end 

    it "verifies the password is incorrect" do 
      expect(user.is_password?("hunter1")).to be false 
    end 
  end 


  describe "::find_by_credentials" do 
    before { user.save! }
    
    it "returns the user given the correct credentials" do
      expect(User.find_by_credentials("hunter2@gmail.com", "hunter2")).to eq(user) 
    end  

    it "returns nil given incorrect credentials" do
      expect(User.find_by_credentials("hunter1@gmail.com", "hunter2")).to eq(nil)  
    end 
  end 
    

  
end
