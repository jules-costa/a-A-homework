class User < ApplicationRecord
  attr_reader :password

  before_validation :ensure_session_token
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

  #set error msg to Password can't be blank if password_digest is not present
  #how to validate presence of password if it is not stored in users table?
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user &&
    Bcrypt::Password.new(user.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


end
