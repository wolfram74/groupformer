class Preference < ActiveRecord::Base
  belongs_to :boot
  belongs_to :project
end
