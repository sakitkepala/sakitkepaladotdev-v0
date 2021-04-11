import * as React from "react";
import Head from "next/head";
import { ScreenEksperimen, data } from "../components/eksperimen";
import styles from "../styles/Home.module.css";

export default function Depan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {data.judul} - Sebuah eksperimen web interaktif | Di Halaman Depan
          sakitkepala.dev
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ScreenEksperimen>
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
