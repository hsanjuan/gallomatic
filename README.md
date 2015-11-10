Gall-O-matic
============

Gall-O-matic is a simple sinatra application for deploying an image gallery.

Usage
=====

1. Place your images in `public/gallery`. 
2. Edit `config.yaml`
3. Deploy to Heroku or anywhere
or
3. Generate a static `index.html` with `generate_static_site.rb`. After that you can deploy the `public/` folder as a static website.

Image description (and other information) is acquired looking at EXIF data.

Online demo
===========

Visit http://gallomatic.herokuapp.com

License
=======

GPLv3+
