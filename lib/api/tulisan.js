import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";

const direktoriPostingan = join(process.cwd(), "_postingan");

function bacaKontenFile(namaFile) {
  const fullPathPostingan = join(direktoriPostingan, namaFile);
  return fs.readFileSync(fullPathPostingan, "utf8");
}

function getListInfoPostingan() {
  const listPostingan = fs.readdirSync(direktoriPostingan);

  const listInfoSemua = listPostingan.map((postingan) => {
    const kontenFile = bacaKontenFile(postingan);
    const { data } = matter(kontenFile);
    return {
      slug: postingan.replace(/\.mdx/, ""),
      ...data,
    };
  });

  return listInfoSemua;
}

async function getPostinganMenurutSlug(slug) {
  const sumberDariFile = bacaKontenFile(`${slug}.mdx`);

  const { data: info, content } = matter(sumberDariFile);
  const sumber = await renderToString(content);

  return { sumber, info };
}

export { getListInfoPostingan, getPostinganMenurutSlug };
