import * as React from "react";
import Link from "next/link";
import { getSemuaSortir } from "../lib/api/eksperimen";

export async function getStaticProps() {
  return {
    props: {
      data: getSemuaSortir(),
    },
  };
}

export default function Lab({ data }) {
  return (
    <main>
      <h1>Lab</h1>

      <p>Koleksi eksperimen-eksperimen halaman depan interaktif...</p>

      <ul>
        {data.map(({ id, tanggal, judul, repo, source }) => (
          <li key={id}>
            <Link href={`/lab/eksperimen/${repo}`}>
              <a>
                {/* TODO: styling, jangan pake nbsp wkwk */}
                {tanggal}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <u>{judul}</u>
              </a>
            </Link>
            {source ? (
              <pre>
                [src]{" "}
                <Link href={source}>
                  <a>
                    <u>{source}</u>
                  </a>
                </Link>
              </pre>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
