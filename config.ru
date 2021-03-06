#!/usr/bin/ruby
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

$: << File.dirname(__FILE__)

require 'bundler'
Bundler.require

require 'gallomatic-app.rb'

run Gallomatic
