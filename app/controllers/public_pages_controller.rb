class PublicPagesController < ApplicationController
  skip_before_filter :signed_in_user
  layout "public_pages"


  def serve_page                              # default for pages with only one set of content blocks 
    @section = Section.find_by_name(params[:id])
    @content_blocks = ContentBlock.find_all_by_section_id(@section.id)
    render :action => @section.name
  end

  def home
    @content_blocks_info = ContentBlock.find_all_by_section_id(Section.find_by_name("home_info").id)
    @content_blocks_news = ContentBlock.find_all_by_section_id(Section.find_by_name("home_news").id)
    render 'home'
  end

  def upov
    
    @content_blocks_history = ContentBlock.find_all_by_section_id(Section.find_by_name("upov_history").id)
    @content_blocks_origins = ContentBlock.find_all_by_section_id(Section.find_by_name("upov_origins").id)
    @content_blocks_provisions = ContentBlock.find_all_by_section_id(Section.find_by_name("upov_provisions").id)
    @content_blocks_infrastructure = ContentBlock.find_all_by_section_id(Section.find_by_name("upov_infrastructure").id)
    @open_section = params[:section]
  end
 
  def about
    @content_blocks_bg = ContentBlock.find_all_by_section_id(Section.find_by_name("about_bg").id)
    @content_blocks_activities = ContentBlock.find_all_by_section_id(Section.find_by_name("about_activities").id)
    @content_blocks_members = ContentBlock.find_all_by_section_id(Section.find_by_name("about_members").id)
    @content_blocks_board = ContentBlock.find_all_by_section_id(Section.find_by_name("about_board").id)
    @content_blocks_staff = ContentBlock.find_all_by_section_id(Section.find_by_name("about_staff").id)
    @open_section = params[:section]
  end

end
