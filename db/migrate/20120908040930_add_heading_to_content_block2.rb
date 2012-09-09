class AddHeadingToContentBlock2 < ActiveRecord::Migration
  def change
    add_column :content_blocks, :heading, :string
  end
end
