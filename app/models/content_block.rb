class ContentBlock < ActiveRecord::Base
  attr_accessible :content, :heading, :section_id, :page_order_id, :editor_id, :editor_accessible
  belongs_to :section
  default_scope :order => 'page_order_id, created_at DESC'
end
