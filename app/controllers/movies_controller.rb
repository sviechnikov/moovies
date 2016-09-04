class MoviesController < ApplicationController
  def index
    @movies = { listOfMovies: MovieService.all }
  end
end
