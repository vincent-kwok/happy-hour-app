class BarsController < ApplicationController
  def index
    zip = 60614
    specials = "Y"
    # type = 
    # amenity = 
    response = Unirest.get("https://api.barzz.net/api/search?zip=#{zip}&specials=#{specials}&user_key=#{ENV['api_key']}")
    render json: response.body
  end

  def show
    response = Unirest.get("")
    render json: response.body
  end
end

