import Head from "next/head";
import { motion } from "framer-motion";
import { getTerbaru } from "../lib/api/eksperimen";

import { ScreenEksperimen } from "../components/eksperimen";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      eksperimen: getTerbaru(),
    },
  };
}

export default function Depan({ eksperimen }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
    >
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
    </motion.div>
  );
}
