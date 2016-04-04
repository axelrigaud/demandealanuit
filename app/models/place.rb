class Place < ActiveRecord::Base
  validates :title, presence: true
end
