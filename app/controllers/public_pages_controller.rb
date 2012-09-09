class PublicPagesController < ApplicationController
  layout "public_pages"
  def home
  end
  def contact
    @content_block = ContentBlock.find_by_id(1)
  end
  def ip
        @content_blocks = ContentBlock.order("page_order_id, created_at DESC").where({ :section_id => Section.find_by_name("ip_overview").id })
  end
  def ip_benefits
  end
  def ip_experts
  end
  def it
  end
  def upov
    render "upov", :locals => {:upovSection => params[:upovSection]}
  end
  def about
    render "about", :locals => {:aboutSection => params[:aboutSection]}
  end
  def wipo
  end
  def wto_trips
  end
  def cbd
  end
end
