class GreetingsController < ApplicationController
  def index
    # first i get a random Greeting id
    random_greeting_id = Greeting.pluck(:id).sample
    @greeting_random = Greeting.find(random_greeting_id)

    respond_to do |format|
      format.html
      format.json { render json: @greeting_random }
      format.xml { render xml: @greeting_random }
    end
  end
end
