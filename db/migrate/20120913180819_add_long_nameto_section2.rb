class AddLongNametoSection2 < ActiveRecord::Migration
    def change
      add_column :sections, :long_name, :string
  end

end
