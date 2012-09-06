class CreateContentBlocks < ActiveRecord::Migration
  def change
    create_table :content_blocks do |t|
      t.text :content
      t.string :user_id
      t.string :intenger

      t.timestamps
    end
  end
end
