class Section < ActiveRecord::Base
  attr_accessible :name
  has_many :content_blocks
end
