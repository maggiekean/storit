class Section < ActiveRecord::Base
  attr_accessible :name, :long_name
  has_many :content_blocks, :order => "position"
  default_scope :order => 'id'
end
