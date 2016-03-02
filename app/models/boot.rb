class Boot < ActiveRecord::Base
  belongs_to :cohort
  has_many :preferences
  has_many :projects
end
