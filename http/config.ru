require "fileutils"
#log_file = File.join(File.dirname(__FILE__), *%w[log sinatra.log])
#FileUtils.mkdir_p(File.dirname(log_file))
#FileUtils.touch(log_file)
#log = File.new(log_file, 'a')
#$stdout.reopen(log)
#$stderr.reopen(log)

require File.expand_path(File.join(File.dirname(__FILE__), "server"))

run Sinatra::Application.new