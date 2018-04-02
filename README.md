# GPX-To-KML Converter

Converts [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) files into [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) files. Lot's of websites offer gps recordings of hiking tracks as GPX files to download. Awesome Apps like [Maps.me](https://maps.me/) however are not able to handle those files. As KML is supported to be imported, a conversion is needed.

This little converter spawns a nodeJS server, takes an url of a gpx file, downloads it, convert it to kml and then return it back to the user, ready to be imported into the app of your choice.