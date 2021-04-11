import fs from "fs";
import { join } from "path";

const direktoriLab = join(process.cwd(), "_lab");

const listRepo = fs.readdirSync(direktoriLab);
const dataLab = listRepo.map((namaRepo) => {
  return {
    slug: namaRepo,
    repo: namaRepo,
    judul: "Spike",
  };
});

// const dataEksperimen = [
//   {
//     //component: `20210411-1`, // DONE
//     //slug: "spike-1", // DONE
//     id: 1,
//     tanggal: "2021-04-11",
//     judul: "Spike",
//     deskripsi: "Bla bla bla. Awesome, ye kan?",
//     //tanggalRevisi: null, // not sure
//   },
// ];

const dataEksperimen = dataLab;
console.log(dataEksperimen);

function getTerbaru() {
  // TODO: ambil data dari list yang sudah disortir
  return dataEksperimen[0];
}

function getSemuaSortir() {
  return dataEksperimen;
}

export { getTerbaru, getSemuaSortir as getSemuaUrut };
