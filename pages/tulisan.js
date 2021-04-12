import * as React from "react";
import Link from "next/link";
import { getListInfoPostingan } from "../lib/api/tulisan";

export async function getStaticPaths() {
  const paths = getListInfoPostingan().map((postingan) => ({
    params: { slug: postingan.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const listPostingan = getListInfoPostingan();

  return {
    props: {
      listPostingan,
    },
  };
}

export default function Tulisan({ listPostingan }) {
  return (
    <main>
      <h1>Tulisan</h1>

      <p>
        Catatan pembelajaran dalam front-end development, web interaktif, atau
        tulisan apapun yang saya rasa pingin dibagi saja :D
      </p>

      <ul>
        {listPostingan.map(({ id, tanggal, judul, slug }) => (
          <li key={id}>
            <Link href={`/tulisan/${slug}`}>
              <a>
                {/* TODO: styling, jangan pake nbsp wkwk */}
                {tanggal}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <u>{judul}</u> &rarr;
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
