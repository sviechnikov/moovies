class MovieService
  BASE_URL = 'http://private-20bfe-themoviedb.apiary-mock.com/3/movie/'.freeze

  def self.request(method, params = {})
    uri = URI(BASE_URL + method)
    uri.query = URI.encode_www_form(params)
    response = Net::HTTP.get_response(uri)

    { success: response.is_a?(Net::HTTPSuccess), data: JSON.parse(response.body) }
  end
end
