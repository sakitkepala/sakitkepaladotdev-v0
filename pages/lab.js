import * as React from "react";
import { getSemuaSortir } from "../lib/api/eksperimen";

export async function getStaticProps(context) {
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
        {data.map(({ id, tanggal, judul }) => (
          <li key={id}>
            {/* TODO: styling, jangan pake nbsp wkwk */}
            {tanggal}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {judul}
          </li>
        ))}
      </ul>
    </main>
  );
}
