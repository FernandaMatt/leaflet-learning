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

var myLines2 = [{
    "type": "LineString",
    "coordinates": [[-43.175117, -22.869335], [-43.151515, -22.871588], [-43.128389, -22.873566]]
}, {
    "type": "LineString",
    "coordinates": [[-43.193396, -22.921085], [-43.186617, -22.930018]]
}];

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

myLayer.addData(myLines);

myLayer.addData(myLines2);

var myStyle = {
    "color": "#ff7800",
    "weight": 13,
    "opacity": 0.65
};

myLayer.on('mouseover', function (e) {
	myLayer.setStyle(myStyle);
});

myLayer.on('mouseout', function (e) {
	myLayer.resetStyle();
});

// var coord = L.popup();

// function onMapClick(e) {
// 	coord
// 		.setLatLng(e.latlng)
// 		.setContent("Coordinate: " + e.latlng.toString())
// 		.openOn(map);
// }

// map.on('click', onMapClick);

var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);

var beaches = [
{
	"type": "Feature",
    "properties": {"name": "Flamengo Beach"},
	"geometry": {
	  "type": "Point",
	  "coordinates": [-43.170392, -22.927251]
	}
  },
  {
	"type": "Feature",
    "properties": {"name": "Vermelha Beach"},
	"geometry": {
	  "type": "Point",
	  "coordinates": [-43.164651, -22.955123]
	}
  },
]

var geojsonMarkerOptions = {
    radius: 19,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(beaches, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
	onEachFeature: onEachFeature
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": false
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}];

L.geoJSON(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(map);