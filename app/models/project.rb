class Project < ActiveRecord::Base
  belongs_to :boot
  has_many :preferences
end
