class RemoveApplicationAddtoCb < ActiveRecord::Migration
    def change
      add_column :content_blocks, :editor_id, :integer
      remove_column :content_blocks, :application_id
    end
  end
