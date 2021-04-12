import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const direktoriLab = join(process.cwd(), "_lab");

function getInfoDetailRepo(repoDir) {
  const fullPath = join(direktoriLab, repoDir, `index.md`);
  try {
    const kontenFile = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(kontenFile);
    return data;
  } catch (error) {
    console.error(error);
  }
}

const infoDirektoriRepo = (repo) => ({ slug: repo, repo });

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
function getListInfoRepoLab() {
  const listRepo = fs.readdirSync(direktoriLab);
  const dataLab = listRepo.map((repo) => ({
    ...infoDirektoriRepo(repo),
    ...getInfoDetailRepo(repo),
  }));
  return dataLab;
}

/**
 *
 * Export
 */
function getSemuaSortir() {
  return getListInfoRepoLab().sort((item1, item2) =>
    item1.id > item2.id ? -1 : 1
  );
}

function getTerbaru() {
  return getListInfoRepoLab().sort((item1, item2) =>
    item1.id > item2.id ? -1 : 1
  )[0];
}

function getDetailRepo(repo) {
  return { ...infoDirektoriRepo(repo), ...getInfoDetailRepo(repo) };
}

export { getTerbaru, getSemuaSortir, getDetailRepo };
