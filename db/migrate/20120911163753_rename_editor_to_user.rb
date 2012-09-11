class RenameEditorToUser < ActiveRecord::Migration
  def self.up
    rename_column :content_blocks, :editor_id, :user_id
  end
end
