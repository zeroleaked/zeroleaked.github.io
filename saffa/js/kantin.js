const points = [
  ['KKP depan', [-6.892160, 107.610601]],
  ['KKP crcs', [-6.887713, 107.611582]],
  ['KKP saraga', [-6.887450, 107.610111]],
  ['kantin basement cbar', [-6.891280, 107.610005]],
  ['eititu', [-6.891147, 107.610875]],
  ['kantin borju', [-6.890564, 107.609253]],
  ['kantin oktagon', [-6.889011, 107.610048]],
  ['kantin gkub', [-6.890426, 107.608988]],
  ['kantin gkut', [-6.890325, 107.611722]],
  ['kantin barat laut (kbl)', [-6.888427, 107.608661]],
  ['kantin saraga', [-6.887399, 107.610147]],
  ['kantin selasar parkiran sr', [-6.892619, 107.611979]],
  ['kantin sbm', [-6.888171, 107.608566]],
  ['tamansari food fest', [-6.887578, 107.608759]],
  ['kantin itb press', [-6.888055, 107.610826]],
  ['pratama corner', [-6.888771, 107.612657]],
  ['kanti arsi', [-6.891865, 107.611648]],
  ['fore', [-6.887925, 107.611664]],
  ['kantin salman', [-6.894253, 107.610978]]
]

var mymap = L.map('mapid').setView([-6.8915, 107.6107], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

let popup = "<b>KANTIN BARRAC</b><br><p>Kantin Barrac adalah kantin yang terletak di antara Gedung FSRD dan Gedung Planologi SAPPK. Pilihan makanan banyak, harga terjangkau, pemandangannya juga indah!</p><p>funfact: Awalnya bangunan Kantin Barrac bukan diperuntukkan sebagai kantin, loh!</p>"
const popup_options = '<div class="popup-option"><img src="../image/rute.png" width="70px" height="70px"></div><a href="../pages/foto.html"><div class="popup-option"><img src="../image/foto.png" width="70px" height="70px"></div></a><div class="popup-option"><img src="../image/share.png" width="70px" height="70px"></div>'
popup += popup_options;
L.marker([-6.891639, 107.611658]).addTo(mymap).bindPopup(popup)

points.map(p => L.marker(p[1]).addTo(mymap));//.bindPopup(`<b>${p[0]}</b>`));
