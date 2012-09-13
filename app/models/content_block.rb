
class ContentBlock < ActiveRecord::Base
  attr_accessible :content, :heading, :section_id, :position, :user_id, :editor_accessible
  belongs_to :section
  belongs_to :user
  default_scope :order => 'position'
  acts_as_list :scope => :section
  has_paper_trail
  
  def head
      content[0..50]
  end
end
