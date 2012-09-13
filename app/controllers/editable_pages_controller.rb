class EditablePagesController < ApplicationController
  layout 'editable_pages'
  def ip_overview
    @section = Section.find_by_name("ip_overview")
    @content_blocks = ContentBlock.find_all_by_section_id(@section.id)
      
  end

  def ip_sort
    @section = Section.find_by_name("ip_overview")
    @content_blocks = ContentBlock.find_all_by_section_id(@section.id)
    @content_blocks.each do |content_block|
      content_block.position = params['content_block'].index(content_block.id.to_s) + 1
      content_block.save
    end
  render :nothing => true
  end
  
  def ip_overview_sort
    @section = Section.find_by_name("ip_overview")
    @content_blocks = ContentBlock.find_all_by_section_id(@section.id)
  end
  
  def back
   render :nothing => true
  end
end
