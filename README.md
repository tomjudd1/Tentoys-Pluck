# Middleman Boilerplate

Repo for the Animade Middleman Boilerplate.

It uses Haml, Sass, and Bourbon

## Setup

The project runs on middleman, so you'll want to get that set up:

    sudo gem install middleman

Then run the bundler to ensure the necessary gems are installed:

    bundle install

Bower is used for package management:

    bower install
    
To get running, start the middleman server:
  
    middleman

The site is now running at `http://0.0.0.0:4567/`


## Generating Backbone collections, models, views and templates

The Rakefile includes a Backbone generator to take the edge of the laborious manual creation of Backbone stuff. 

Create a collection/model with:

    rake backbone:data[model_name]

For example:

    rake backbone:data[project]

Note - this should always be a singular noun, in lower case. The above would generate the following files:

    collections/projects_collection.js
    models/project_model.js

Create a template/view combo with:

    rake backbone:views[view_name,view_action]

So if you wanted to create a projects_index view/template you would run:

    rake backbone:views[project,index]

This would generate:

    views/projects/projects_index.js
    templates/projects/projects_index.hamlc

__NOTE: if using zsh, you need to escape the rake arguments with backslashes:__

    rake backbone:views\[view_name,view_action\]

## Building

Middleman builds to a static `build` folder in the root of the project. To create/update this simply run:

    middleman build