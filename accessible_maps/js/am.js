var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"\
				 >OpenStreetMap</a>'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

var myIcon = L.divIcon({className: 'leaflet-div-icon'});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng, {alt: "My Location"}).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

var test = L.marker([-22.937, -43.177], {alt: "Test", icon: myIcon}).addTo(map);

function onLocationError(e) {
    // alert(e.message); alert is ugly
	//using a popup in the center of the map instead
	map.openPopup("Location access denied. Please enable location services in your browser.", map.getCenter());
}

map.on('locationerror', onLocationError);

map.on('locationfound', onLocationFound);