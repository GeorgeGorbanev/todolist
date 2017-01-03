require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
# require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
#require "rails/test_unit/railtie"

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
