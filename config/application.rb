require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Todolist
  class Application < Rails::Application
    Mongoid.load!(Rails.root + "config/mongoid.yml", :development)
    Mongoid.load!(Rails.root + "config/mongoid.yml", :test)
    Mongoid.load!(Rails.root + "config/mongoid.yml", :production)
    config.generators do |g|
      g.orm :mongoid
    end
  end
end
