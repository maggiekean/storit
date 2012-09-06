class ContentBlock < ActiveRecord::Base
  attr_accessible :content, :application_id
  belongs_to :application
end
