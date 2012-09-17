class ContentBlocksController < ApplicationController
  # GET /content_blocks
  def index
    @content_blocks = ContentBlock.all
  end

  # GET /content_blocks/1
  def history
    @content_block = ContentBlock.find(params[:id])
    @versions = @content_block.versions.order(:id).reverse_order
  end
  
  # GET /content_blocks/1
  def show
    @content_block = ContentBlock.find(params[:id])
  end

  # GET /content_blocks/new
  def new
    @content_block = ContentBlock.new
    @content_block.section_id = params[:section_id]
    @content_block.user_id = current_user.id
    @content_block.editor_accessible = FALSE
    current_max = Section.find_by_id(params[:section_id]).content_blocks.max_by(&:position)
    if current_max.nil?
      @content_block.position = 1
    else
      @content_block.position = current_max.position + 1
    end
  end

  # GET /content_blocks/1/edit
  def edit
    @content_block = ContentBlock.find(params[:id])
    @content_block.user_id = current_user.id
  end

  # POST /content_blocks
  def create
    @content_block = ContentBlock.new(params[:content_block])
      if @content_block.save
        redirect_to @content_block, notice: 'Content block was successfully created.' 
      else
         render "new" 
      end
  end

  # PUT /content_blocks/1
  def update
    @content_block = ContentBlock.find(params[:id])
      if @content_block.update_attributes(params[:content_block])
        redirect_to history_content_block_path(@content_block), notice: 'Content block was successfully updated.' 
      else
        render "edit" 
      end
  end

  # DELETE /content_blocks/1
  def destroy
    @content_block = ContentBlock.find(params[:id])
    @section = Section.find_by_id(@content_block.section_id)
    puts "Section is #{@section.id}"
    @content_block.destroy
    redirect_to section_overview_editable_page_path(@section.id)
  end
end
