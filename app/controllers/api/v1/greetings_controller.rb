class Api::V1::GreetingsController < ApplicationController
  def index
    random_greeting_id = Greeting.pluck(:id).sample
    @greeting_random = Greeting.find(random_greeting_id)
    render json: @greeting_random
  end
end
