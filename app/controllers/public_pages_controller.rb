class PublicPagesController < ApplicationController
  skip_before_filter :signed_in_user
  layout "public_pages"

  def home
    @content_blocks_info = ContentBlock.find_all_by_section_id(Section.find_by_name("home_info").id)
    @content_blocks_news = ContentBlock.find_all_by_section_id(Section.find_by_name("home_news").id)
  end

  def serve_page                              # default for pages with only one set of content blocks 
    @content_blocks = ContentBlock.find_by_id(params[:id])
    page_name = Section.find_by_id(params[:id]).name
    render :action => @section.name
  end
  
  def it
  end
  
  def upov
    @content_blocks_history = ContentBlock.find_all_by_section_id(params[:history_id])
    @content_blocks_origins = ContentBlock.find_all_by_section_id(params[:origins_id])
    @content_blocks_provisions = ContentBlock.find_all_by_section_id(params[:provisions_id])
    @content_blocks_infrastructure = ContentBlock.find_all_by_section_id(params[:infrastructure_id])
  end
 
  def about
    @content_blocks_background = ContentBlock.find_all_by_section_id(params[:background_id])
    @content_blocks_activities = ContentBlock.find_all_by_section_id(params[:activities_id])
    @content_blocks_members = ContentBlock.find_all_by_section_id(params[:members_id])
    @content_blocks_board = ContentBlock.find_all_by_section_id(params[:board_id])
    @content_blocks_staff = ContentBlock.find_all_by_section_id(params[:staff_id])
  end

end
