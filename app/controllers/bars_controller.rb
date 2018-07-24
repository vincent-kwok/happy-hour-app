class BarsController < ApplicationController
  def index
    # zip = 60608
    # specials = "Y"
    # type = 
    # amenity = 
    # response = Unirest.get("https://api.barzz.net/api/search?zip=#{params[:zip]}&specials=#{specials}&user_key=#{ENV['api_key']}")
    render json: response.body
  end

  def show
     specials = "Y"
    response = Unirest.post("https://api.barzz.net/api/search?zip=#{params[:zip]}&specials=#{specials}&user_key=#{ENV['api_key']}")
    # response = Unirest.get("")
    render json: response.body
  end
end

