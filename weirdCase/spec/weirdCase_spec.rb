require 'spec_helper'

RSpec.describe WeirdCase, type: :model do
  describe "case change should work" do
    it "should uppercase even and lowercase odd indices of words" do
      input = "this is a test"
      expected = "ThIs Is A TeSt"
      weirdCase = WeirdCase.new(input)
      expect(weirdCase.string).to eq expected
    end
  end
end