# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5.times do
  Post.create(name: Faker::Hipster.word, body: LoremIpsum.lorem_ipsum(paragraphs: 3))
  Heading.create(title: Faker::Book.title)
  Comment.create(body: Faker::Hipster.sentence)
  User.create(email: Faker::Internet.email, password: Faker::Internet.password)
end

Post.take.headings << Heading.take(2)
Post.take.comments << Comment.take(3)
u = User.create(email: 'q@w.e', password: 'qwertyuiop')
u.role = :admin
u.save()