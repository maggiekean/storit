class EditablePagesController < ApplicationController
  layout 'editable_pages'
  
  def view_editable_content
    @sections = Section.all
  end
  
  def edit_section_contents
    id = params[:id]
    section_name = Section.find_by_id(id).name
      case section_name 
      when "ip_overview"
        redirect_to ip_overview_editable_pages_path
      when "ip_benefits"
        redirect_to ip_benefits_editable_pages_path
      else
         render :nothing => true
      end
  end
  
  def section_overview
    @section = Section.find_by_id(params[:id])
    @content_blocks = ContentBlock.find_all_by_section_id(@section.id)
    render :action => @section.name
  end
  
  def ip_overview
    @section = Section.find_by_name("ip_overview")
    @content_blocks = ContentBlock.find_all_by_section_id(@section.id)
    render 'ip_overview'
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


