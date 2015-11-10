#!/usr/bin/env ruby

$: << File.dirname(__FILE__)
require 'gallomatic-app'
request = Rack::MockRequest.new(Gallomatic)
File.write('public/index.html', request.get('/').body)
puts "public/index.html generated. You can now deploy the public/ folder as a full website."
exit 0
