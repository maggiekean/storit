class AddPageOrderId < ActiveRecord::Migration
  def change
    add_column :content_blocks, :page_order_id, :integer
  end
end
