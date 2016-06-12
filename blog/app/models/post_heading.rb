class PostHeading < ActiveRecord::Base
  belongs_to :post
  belongs_to :heading
end
