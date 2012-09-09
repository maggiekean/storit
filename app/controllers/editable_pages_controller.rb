class EditablePagesController < ApplicationController
  layout 'application'
  def ip_overview
    @content_blocks = ContentBlock.order("page_order_id, created_at DESC").where({ :section_id => 3 })
  end
  
  def content_block_history
    @content_blocks = ContentBlock.order("created_at DESC").where({ :section_id => params[:section_id], :page_order_id => params[:page_order_id]  })
  end
  
  def back
    if (params[:section_id] == "3")
      redirect_to admin_ip_path
    else
      puts "something went wrong"
    end
  end
end
