var mymap = L.map('mapid').setView([-6.8915, 107.6107], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
