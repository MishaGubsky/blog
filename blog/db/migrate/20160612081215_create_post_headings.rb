class CreatePostHeadings < ActiveRecord::Migration
  def change
    create_table :post_headings do |t|
      t.belongs_to :post, index: true
      t.belongs_to :heading, index: true
      t.timestamps null: false
    end
  end
end
