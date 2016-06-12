class Heading < ActiveRecord::Base
  has_many :post_headings
  has_many :posts, through: :post_headings
end
