Gall-O-matic
============

Gall-O-matic is a simple sinatra application for deploying an image gallery.

Usage
=====

1. Place your images in `public/gallery`. 
2. Edit `config.yaml`
3. Deploy to Heroku or anywhere
or
3. Launch rackup (`rackup config.ru`) and create a static site with just the index (`curl localhost:9292 > index.html`) and the contents of the `public/` to be uploaded to your favourite web provider.

Gall-O-matic will automaticly generate the necessary single-page HTML for your image gallery with the `.jpg` images included in the directory.

Image description (and other information) is acquired looking at EXIF data.

License
=======

GPLv3+
