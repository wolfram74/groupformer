require 'rails_helper'

RSpec.describe Cohort, type: :model do
  context "#associations" do
    it {should have_many :boots}
  end
end
