var map = L.map('map').setView([-22.906, -43.190], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"\
				 >OpenStreetMap</a>'
}).addTo(map);

// creating a single marker with a custom icon

var singleGreenIcon = L.icon({
    iconUrl: 'icons/leaf-green.png',
    shadowUrl: 'icons/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([-22.906, -43.190], {icon: singleGreenIcon}).addTo(map)

// defining LeafIcon class to create several similar icons
var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: 'icons/leaf-shadow.png',
		iconSize:     [38, 95],
		shadowSize:   [50, 64],
		iconAnchor:   [22, 94],
		shadowAnchor: [4, 62],
		popupAnchor:  [-3, -76]
	}
});

//creating instances of the LeafIcon class

var greenIcon = new LeafIcon({iconUrl: 'icons/leaf-green.png'}),
	redIcon = new LeafIcon({iconUrl: 'icons/leaf-red.png'}),
	orangeIcon = new LeafIcon({iconUrl: 'icons/leaf-orange.png'});

L.marker([-22.906, -43.290], {icon: greenIcon}).addTo(map);
L.marker([-22.906, -43.090], {icon: redIcon}).addTo(map);
L.marker([-22.956, -43.190], {icon: orangeIcon}).addTo(map);

