class ContentBlocksController < ApplicationController
  # GET /content_blocks
  def index
    @content_blocks = ContentBlock.all
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
    current_max = Section.find_by_id(3).content_blocks.max_by(&:position)
    @content_block.position = current_max.position + 1
  end

  # GET /content_blocks/1/edit
  def edit
    @content_block = ContentBlock.find(params[:id]).dup
    @content_block.user_id = current_user.id
  end

  # POST /content_blocks
  # POST /content_blocks.json
  def create
    @content_block = ContentBlock.new(params[:content_block])

    respond_to do |format|
      if @content_block.save
        format.html { redirect_to @content_block, notice: 'Content block was successfully created.' }
        format.json { render json: @content_block, status: :created, location: @content_block }
      else
        format.html { render action: "new" }
        format.json { render json: @content_block.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /content_blocks/1
  # PUT /content_blocks/1.json
  def update
    @content_block = ContentBlock.find(params[:id])

    respond_to do |format|
      if @content_block.update_attributes(params[:content_block])
        format.html { redirect_to @content_block, notice: 'Content block was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @content_block.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /content_blocks/1
  # DELETE /content_blocks/1.json
  def destroy
    @content_block = ContentBlock.find(params[:id])
    @content_block.destroy

    respond_to do |format|
      format.html { redirect_to content_blocks_url }
      format.json { head :no_content }
    end
  end
end
