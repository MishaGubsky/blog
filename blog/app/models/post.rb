class Post < ActiveRecord::Base
  has_many :comments
  has_many :post_headings
  has_many :headings, through: :post_headings

  def as_json(options)
    super(options.merge(include: {headings: {:only => [:id, :title]},
                                  comments: {:only => [:id, :body]}}))
  end
end
