class ChangePageOrdertoPosition < ActiveRecord::Migration
  def self.up
    rename_column :content_blocks, :page_order_id, :position
  end
end
