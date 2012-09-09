class AddSectionToContentBlock < ActiveRecord::Migration
    def change
      add_column :content_blocks, :section_id, :integer
    end
end
