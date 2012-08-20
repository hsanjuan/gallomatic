# -*- coding: utf-8 -*-

###############################################################################
#     Copyright © 2012 Hector Sanjuan                                         #
#                                                                             #
#     This file is part of Gall-o-Matic.                                      #
#                                                                             #
#     Gall-o-Matic is free software: you can redistribute it and/or modify    #
#     it under the terms of the GNU General Public License as published by    #
#     the Free Software Foundation, either version 3 of the License, or       #
#     (at your option) any later version.                                     #
#                                                                             #
#     Gall-o-Matic is distributed in the hope that it will be useful,         #
#     but WITHOUT ANY WARRANTY; without even the implied warranty of          #
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           #
#     GNU General Public License for more details.                            #
#                                                                             #
#     You should have received a copy of the GNU General Public License       #
#     along with Gall-o-Matic.  If not, see <http://www.gnu.org/licenses/>.   #
#                                                                             #
###############################################################################

$:<< File.dirname(__FILE__)

require 'rubygems'
require 'sinatra/base'
require 'haml'
require 'yaml'
require 'exifr'
require 'json'
require 'uri'

class Gallomatic < Sinatra::Base

    configure do
        begin
            config_path = File.join(File.dirname(__FILE__),'config.yaml')
            config = YAML::load(File.open(config_path))
        rescue => e
            warn e.message
            warn e.backtrace
            exit 1
        end

        images = Dir[File.join(File.dirname(__FILE__),
                               'public','gallery','*.jpg')].sort
        images = images.collect do |img|
            exif = EXIFR::JPEG.new(img)
            id = 'pic_' + File.basename(img).gsub(/[^a-zA-Z0-9]/, '_').downcase
            {
                :path => URI.encode(File.join('gallery', File.basename(img))),
                :description => exif.image_description || "",
                :copyright => exif.copyright || "",
                :id => id
            }
        end

        set :cfg, config
        set :images, images
    end

    get '/' do
        @cfg = settings.cfg
        @images = settings.images
        haml :index
    end
end
