import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const direktoriLab = join(process.cwd(), "_lab");

function getEksperimenMenurutRepo(repo) {
  const fullPath = join(direktoriLab, repo, `index.md`);
  try {
    const kontenFile = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(kontenFile);
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Hahaha
 *
 * @returns [
 *   {
 *     slug: "spike-1",
 *     repo: `spike-1`,
 *     id: 1,
 *     tanggal: "2021-04-11",
 *     judul: "Spike",
 *     deskripsi: "Bla bla bla. Awesome, ye kan?",
 *   },
 * ];
 */
function getSemuaDataLab() {
  const listRepo = fs.readdirSync(direktoriLab);
  const dataLab = listRepo.map((repo) => ({
    slug: repo,
    repo,
    ...getEksperimenMenurutRepo(repo),
  }));
  return dataLab;
}

// cache
const semuaTanpaSortir = getSemuaDataLab();
const semuaSortir = semuaTanpaSortir.sort((item1, item2) =>
  item1.id > item2.id ? -1 : 1
);

function getSemuaSortir() {
  return semuaSortir;
}

function getTerbaru() {
  return semuaSortir[0];
}

export { getTerbaru, getSemuaSortir };
