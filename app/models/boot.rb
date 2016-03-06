class Boot < ActiveRecord::Base
  belongs_to :cohort
  has_many :preferences
  has_many :projects
  before_create :set_slug
  private
  def set_slug
    return if self.slug.present?
    characters = (('0'..'9').to_a+('A'..'Z').to_a)
    self.slug = ''
    7.times {self.slug += characters.sample}
  end
end
