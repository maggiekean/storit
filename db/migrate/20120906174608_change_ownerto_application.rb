class ChangeOwnertoApplication < ActiveRecord::Migration
  def change
    rename_column :content_blocks, :user_id, :application_id
  end
end
