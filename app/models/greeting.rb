class Greeting < ApplicationRecord
  def as_json(options={})
    super({ only: [:greeting]}.merge(options))
  end
end
