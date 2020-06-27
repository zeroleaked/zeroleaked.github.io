const sing = ['AC', 'BA', 'BB', 'BT', 'BE', 'JT', 'KT', 'ST', 'JI', 'KI', 'NT', 'GO', 'JK', 'JA', 'LA', 'MA', 'KU', 'MU', 'SA', 'SU', 'PA', 'RI', 'KR', 'SG', 'KS', 'SN', 'SS', 'JB', 'KB', 'NB', 'PB', 'SR', 'SB', 'YO']
const nama = ['Aceh', 'Bali', 'Kapulauan Bangka Belitung', 'Banten', 'Bengkulu', 'Jawa Tengah', 'Kalimantan Tengah', 'Sulawesi Tengah', 'Jawa Timur', 'Kalimantan Timur', 'Nusa Tenggara Timur', 'Gorontalo', 'DKI Jakarta', 'Jambi', 'Lampung', 'Maluku', 'Kalimantan Utara', 'Maluku Utara', 'Sulawesi Utara', 'Sumatera Utara', 'Papua', 'Riau', 'Kapulauan Riau', 'Sulawesi Tenggara', 'Kalimantan Selatan', 'Sulawesi Selatan', 'Sumatera Selatan', 'Jawa Barat', 'Kalimantan Barat', 'Nusa Tenggara Barat', 'Papua Barat', 'Sulawesi Barat', 'Sumatera Barat', 'Daerah Istimewa Yogyakarta']

const std = 1;

const f = (p, i) => i;

var arr = [...Array(34).keys()];

var data = arr.map((p, i) => {
  return {
    "singkatan": sing[i],
    "average": Math.random() * 3,
    "std": Math.random() / 4 + 0.1,
    "nama": nama[i]
  }
});

data = data.sort((a, b) => a.average - b.average)

console.log(data)
