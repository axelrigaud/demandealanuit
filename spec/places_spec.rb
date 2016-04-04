describe Place do
  it "has a valid factory" do
    FactoryGirl.create(:place).should be_valid
  end
  it "is invalid without a title" do
    FactoryGirl.build(:place, title: nil).should_not be_valid
  end
end

describe Backend::PlacesController, type: :controller do

  describe "#create" do
    before { post :create, { "Place"=> { "un_club"=>"un_club" } } }
    specify("should created one place") { change{ Place.count }.from(0).to(1) }
  end

end
