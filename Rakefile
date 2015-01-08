require 'rake'
require 'fileutils'

namespace :backbone do

  BASE_PATH = 'source/javascripts/backbone'

  desc "Create a backbone view"

  task :data, [:name] do |t, args|
    # Gets the model name
    name = args[:name].downcase
    camel_name = name.capitalize
    #
    # Collection file
    #

    collection_file = File.expand_path(BASE_PATH + '/collections/' + name + 's_collection.js', File.dirname(__FILE__))

    File.open(collection_file, 'w') {|f|

      f.puts "App.Collections.#{camel_name}s = Backbone.Collection.extend({"
      f.puts "  model: App.Models.#{camel_name},"
      f.puts "  url: '/#{name}s'"
      f.puts "});"

    }

    puts "created collections/#{name}s_collection.js"

    #
    # Model file
    #

    model_file = File.expand_path(BASE_PATH + '/models/' + name + '_model.js', File.dirname(__FILE__))

    File.open(model_file, 'w') {|f|

      f.puts "App.Models.#{camel_name} = Backbone.Model.extend({"
      f.puts "  idAttribute: 'id',"
      f.puts "  url: '/#{name}s'"
      f.puts "});"

    }

    puts "created models/#{name}_model.js"

  end

  task :views, [:name, :action] do |t, args|

    name = args[:name].downcase
    camel_name = name.capitalize
    action = args[:action].nil? ? 'index' : args[:action]
    camel_action = action.capitalize

    #
    # View directory
    #

    view_dir = File.expand_path(BASE_PATH + '/views/' + name + 's', File.dirname(__FILE__))

    if File.directory?(view_dir)
      puts "skipping views/#{name}s (already exists)"
    else
      FileUtils.mkdir_p(view_dir)
      puts "created views/#{name}s"
    end

    # View index

    File.open(view_dir + '/' + name + 's_' + action + '.js', 'w') {|f|

      f.puts "// -------------------------------------------------"
      f.puts "//"
      f.puts "// #{camel_name}s#{camel_action}"
      f.puts "//"
      f.puts "// -------------------------------------------------"
      f.puts " "
      f.puts "App.Views.#{camel_name}s#{camel_action} = App.Views.Base.extend({"
      f.puts "  className: '#{name}s--#{action}'"
      f.puts "});"

    }

    puts "created views/#{name}s/#{name}s_#{action}.js"

    #
    # Template directory
    #

    template_dir = File.expand_path(BASE_PATH + '/templates/' + name + 's', File.dirname(__FILE__))

    if File.directory?(template_dir)
      puts "skipping templates/#{name}s (already exists)"
    else
      FileUtils.mkdir_p(template_dir)
      puts "created templates/#{name}s"
    end

    # View index

    File.open(template_dir + '/' + name + 's_' + action + '.hamlc', 'w') {|f|

      f.puts "-# --------------------------------"
      f.puts "-# "
      f.puts "-#  #{name}s #{action}"
      f.puts "-# "
      f.puts "-# --------------------------------"
      f.puts " "

    }

    puts "created views/#{name}s/#{name}s_#{action}.js"

  end

end
