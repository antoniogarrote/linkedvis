require "rubygems"
require "bundler/setup"
Bundler.require

get "/:size/diamonds_test.n3" do
  send_file("./public/#{params[:size]}_test.n3", :type => "text/n3")
end
