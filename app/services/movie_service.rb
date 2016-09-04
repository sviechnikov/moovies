class MovieService
  def self.all
    JSON.parse RestClient.get 'http://api.androidhive.info/json/movies.json'
  end
end
