require 'rails_helper'

RSpec.describe Project, type: :model do
  context "#associations" do
    it {should belong_to :boot}
  end
end
