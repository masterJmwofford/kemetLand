var map = L.map('map').setView([40.505, -96.19], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([32.1, -83.09]).addTo(map);
marker.bindPopup("<b>BAF Headquarters</b><br>Click To View Center.").openPopup();
