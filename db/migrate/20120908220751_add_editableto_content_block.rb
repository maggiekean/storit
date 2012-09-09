class AddEditabletoContentBlock < ActiveRecord::Migration
  def change
    add_column :content_blocks, :editor_accessible, :boolean
  end
end
