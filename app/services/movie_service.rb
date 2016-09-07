class MovieService
  API_HOST = 'http://private-20bfe-themoviedb.apiary-mock.com/3/movie/'.freeze

  def self.popular
  end

  private

  def req
    uest(path)
    uri = URI::HTTP.build(host: API_HOST, path: path, api_key: Rails.application.secrets.apiary_api_key)

    response = RestClient.get(uri)
    JSON.parse response
  end
end
