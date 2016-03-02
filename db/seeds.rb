# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

squirrels = Cohort.create({
  name: 'squirrels 2015',
  slug:'123456',
  instructor_email:'phaugen@gmail.com'
  })

squirrels.boots << Boot.create({
  name: 'allie',
  slug:'AAAAAAA',
  email:'allie@gmail.com'
  })
squirrels.boots << Boot.create({
  name: 'betty',
  slug:'BBBBBBB',
  email:'betty@gmail.com'
  })
squirrels.boots << Boot.create({
  name: 'cathy',
  slug:'CCCCCCC',
  email:'cathy@gmail.com'
  })

squirrels.boots.each{|boot| boot.projects << Project.create({name:'%x' % rand(10**10), description:'%x' %rand(10**20)})}
