var map = L.map('map').setView([-22.906, -43.190], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"\
				 >OpenStreetMap</a>'
}).addTo(map);

var home = L.marker([-22.937, -43.177]).addTo(map);

var niltao = L.circle([-22.8933, -43.2925], {
	color: 'black',
	fillColor: '#fff',
	fillOpacity: 0.7,
	radius: 250
}).addTo(map);

var campus42 = L.polygon([
	[-22.911108, -43.197522],
	[-22.910724, -43.198238],
	[-22.909572, -43.198326],
	[-22.909572, -43.197940]
	]).addTo(map);

home.bindPopup("Home").openPopup();
niltao.bindPopup("Second home.");
campus42.bindPopup("42 Rio campus");

var popup = L.popup()
    .setLatLng([-22.911108, -43.197522])
    .setContent("I am a standalone popup.")
    // .openOn(map); //Handles closing of previously opened popups
    .addTo(map); //Doesn't handle closing of previously opened popups,
					//home popup will remain open

var coord = L.popup();

function onMapClick(e) {
	coord
		.setLatLng(e.latlng)
		.setContent("Coordinate: " + e.latlng.toString())
		.openOn(map);
}

map.on('click', onMapClick);