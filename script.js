// Calculate the center coordinates for the marker
var centerCoordinates = [25.8617, -80.1918];

// Initialize the map
var map = L.map('map').setView(centerCoordinates, 19); // Set the initial zoom level to 19

// Add a tile layer (you can use different map providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, // Set the maximum zoom level to 19
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var customIcon = L.icon({
    iconUrl: 'monster.png', // Specify the path to your JPG image
    iconSize: [100, 100], // Set the size of the icon
    iconAnchor: [50, 50], // Set the anchor point of the icon (center)
    popupAnchor: [0, -50] // Set the anchor point for the popup
});

// Add a marker to the map
var marker = L.marker(centerCoordinates, { icon: customIcon }).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Hello Im Mark the Monster</b>").openPopup();