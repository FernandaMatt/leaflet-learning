var map = L.map('map').setView([-22.906, -43.190], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var home = L.marker([-22.937, -43.177]).addTo(map);

var niltao = L.circle([-22.8933, -43.2925], {
	color: 'black',
	fillColor: '#fff',
	fillOpacity: 0.7,
	radius: 250
}).addTo(map);