json.array!(@places) do |place|
  json.extract! place, :id, :title, :description, :youtube_link
  json.url place_url(place, format: :json)
end
