require 'rails_helper'

RSpec.describe Boot, type: :model do
  context "#associations" do
    it {should belong_to :cohort}
    # it {should belong_to( :cohort)}
    it {should have_many :projects}
    it {should have_many :preferences}

  end
end
