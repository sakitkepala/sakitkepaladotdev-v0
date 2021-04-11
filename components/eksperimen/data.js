// TODO: generate data otomatis dari eksperimen yang terakhir diterbitkan
const dataEksperimen = [
  {
    id: 1,
    component: `./screens/20210411-1`,
    tanggal: "2021-04-11",
    tanggalSunting: null,
    judul: "Spike",
    deskripsi: "Bla bla bla. Awesome, ye kan?",
  },
];

function getTerbaru() {
  return dataEksperimen[0];
}

function getSemuaUrut() {
  return dataEksperimen;
}

export { getTerbaru, getSemuaUrut };
