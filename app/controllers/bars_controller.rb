class BarsController < ApplicationController
  def index

    response = Unirest.get("https://api.barzz.net/api/search?zip=#{params[:zip]}&specials=#{params[:specials]}&user_key=#{params[:user_key]}")
    render json: response.body
  end

  def show
    response = Unirest.get("")
    render json: response.body
  end
end
