# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :data_dir, 'data'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash, :ignore => 'images'
  # activate :favicon_maker do |f|
  #   f.template_dir  = File.join(root, 'source')
  #   f.output_dir    = File.join(root, 'build')
  #   f.icons = {
  #     "images/_favicon_template.png" => [
  #       { icon: "favicon.png", size: "16x16" },
  #       { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
  #     ]
  #   }
  # end
  activate :relative_assets
  ignore 'bower_components/**/*'
end

activate :gzip

# Use bower in sprockets - http://fearmediocrity.co.uk/2014/01/25/using_bower_with_middleman/
after_configuration do
  sprockets.append_path File.join root.to_s, "source/bower_components"
end

# Deploy site to github pages
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end

# Lets you do /page/ instead of page.html
activate :alias
