import * as React from "react";

import fs from "fs";
import { join } from "path";

export async function getStaticProps() {
  const postsDirectory = join(process.cwd(), "pages", "__lab", "eksperimen");
  const slugs = fs.readdirSync(postsDirectory);
  console.log(slugs);

  const fileContents = fs.readFileSync(join(postsDirectory, slugs[0]), "utf8");
  console.log(fileContents);

  return { props: {} };
}

// const slug = "1";
// const realSlug = slug.replace(/\.js$/, "");
// const fullPath = join(postsDirectory, `${realSlug}.md`);
// const fileContents = readFileSync(fullPath, "utf8");

function Eksperimen() {
  return (
    <main>
      <h1>Lab</h1>

      <p>Koleksi eksperimen-eksperimen halaman depan interaktif...</p>

      <ul>
        <li>Eksperimen 1 &rarr;</li>
        <li>Eksperimen 2 &rarr;</li>
        <li>Eksperimen 3 &rarr;</li>
      </ul>
    </main>
  );
}

export default Eksperimen;
