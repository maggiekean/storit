class ContentBlocksController < ApplicationController
  # GET /content_blocks
  def index
    @content_blocks = ContentBlock.all
  end

  # GET /content_blocks/1
  def history
    @content_block = ContentBlock.find(params[:id])
    @versions = @content_block.versions.order("created_at DESC")
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
    current_max = Section.find_by_id(3).content_blocks.max_by(&:position)
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

    respond_to do |format|
      if @content_block.save
        redirect_to @content_block, notice: 'Content block was successfully created.' 
         render "new" 
      end
    end
  end

  # PUT /content_blocks/1
  def update
    @content_block = ContentBlock.find(params[:id])
      if @content_block.update_attributes(params[:content_block])
        redirect_to @content_block, notice: 'Content block was successfully updated.' 
      else
        render "edit" 
      end
  end

  # DELETE /content_blocks/1
  def destroy
    @content_block = ContentBlock.find(params[:id])
    @content_block.destroy
    redirect_to content_blocks_url 
  end
end
