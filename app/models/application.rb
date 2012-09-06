class Application < ActiveRecord::Base
  attr_accessible :name, :user_id
  has_many :contact_blocks
  belongs_to :user
end
