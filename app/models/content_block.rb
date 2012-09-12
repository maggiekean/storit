class ContentBlock < ActiveRecord::Base
  attr_accessible :content, :heading, :section_id, :page_order_id, :user_id, :editor_accessible
  belongs_to :section
  belongs_to :user
  acts_as_list :scope => :section
end
