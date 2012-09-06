class FixContentBlocks < ActiveRecord::Migration
  def change
    remove_column :content_blocks, :intenger
    remove_column :content_blocks, :user_id
    add_column :content_blocks, :user_id, :integer
  end
end
