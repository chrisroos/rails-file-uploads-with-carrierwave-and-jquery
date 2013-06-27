class Person < ActiveRecord::Base
  attr_accessible :name, :avatar
  validates :name, presence: true

  mount_uploader :avatar, AvatarUploader
end
