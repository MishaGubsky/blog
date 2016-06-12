class CreateHeadings < ActiveRecord::Migration
  def change
    create_table :headings do |t|
      t.string :title

      t.timestamps null: false
    end

    add_index :headings, :title, unique: true
  end
end
