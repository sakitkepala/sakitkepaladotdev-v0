import * as React from "react";
import Head from "next/head";
import { getTerbaru } from "../lib/api/eksperimen";

import { ScreenEksperimen } from "../components/eksperimen";

import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  return {
    props: {
      eksperimen: getTerbaru(),
    },
  };
}

export default function Depan({ eksperimen }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {eksperimen.judul} - Sebuah eksperimen web interaktif | Di Halaman
          Depan sakitkepala.dev
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ScreenEksperimen data={eksperimen}>
          <p>
            Kamu sedang berada di eksperimen web interaktif halaman depan
            sakitkepala.dev
          </p>
          <p>Sedang memuat eksperimen...</p>
        </ScreenEksperimen>
      </main>
    </div>
  );
}
