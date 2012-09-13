class Oops < ActiveRecord::Migration
    def change
      rename_column :versions, :changes, :object_changes
    end 
  end
