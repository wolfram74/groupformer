class Cohort < ActiveRecord::Base
  has_many :boots
  before_create :set_slug

  def projects
    projects = []
    self.boots.each do |boot|
      projects += boot.projects
    end
    projects
  end

  def preference_matrix
    preferences = {}
    boots = self.boots
    boots.each do |boot|
      preferences[boot.name] = {}
      boot.preferences.each do |prefence|
        preferences[boot.name][prefence.project.name] = prefence.rank
      end
    end
    return preferences
  end

  private
  def set_slug
    characters = (('0'..'9').to_a+('A'..'Z').to_a)
    self.slug = ''
    7.times {self.slug += characters.sample}
  end
end
