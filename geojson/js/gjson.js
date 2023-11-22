var map = L.map('map').setView([-22.906, -43.190], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"\
				 >OpenStreetMap</a>'
}).addTo(map);

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Botafogo Field",
        "amenity": "Football Stadium",
        "popupContent": "This is where the Glorious play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-43.292358, -22.893418]
    }
};

var myLayer = L.geoJSON().addTo(map);

myLayer.addData(geojsonFeature);

