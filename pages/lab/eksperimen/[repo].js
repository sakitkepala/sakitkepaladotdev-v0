import Head from "next/head";
import { getDetailRepo, getSemuaSortir } from "../../../lib/api/eksperimen";
import { ScreenEksperimen } from "../../../components/eksperimen";

import styles from "../../../styles/Home.module.css";

export async function getStaticProps({ params }) {
  return {
    props: {
      eksperimen: getDetailRepo(params.repo),
    },
  };
}

export async function getStaticPaths() {
  const paths = getSemuaSortir().map(({ repo }) => ({ params: { repo } }));
  return {
    paths,
    fallback: false,
  };
}

export default function EksperimenPage({ eksperimen }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {eksperimen.judul} - Sebuah eksperimen web interaktif | Di Lab
          sakitkepala.dev
        </title>
      </Head>

      <main className={styles.main}>
        <ScreenEksperimen data={eksperimen}>
          <p>
            Kamu sedang berada di arsip eksperimen web interaktif
            sakitkepala.dev
          </p>
          <p>Sedang memuat eksperimen...</p>
        </ScreenEksperimen>
      </main>
    </div>
  );
}
