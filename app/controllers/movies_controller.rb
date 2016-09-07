class MoviesController < ApplicationController
  # Response data:
  # + page => integer
  # + results => array
  # + total_pages => integer
  # + total_results => integer
  def popular
    @movies = MovieService.request('popular', params)
  end

  private

  def ensure_params
    params.permit(:page)
  end
end
