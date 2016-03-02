require 'rails_helper'

RSpec.describe Preference, type: :model do
  context "#associations" do
    it {should belong_to :boot}
    it {should belong_to :project}

  end
end
