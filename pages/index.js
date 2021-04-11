import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

/**
 * Untuk ditampilkan di halaman depan, butuh:
 * 1. data/metadata tiap eksperimen
 * 2. componen screen/aplikasi eksperimen individualnya
 */
// TODO: pindah jadi import dari modul yang ngehandle logic untuk eksperimen
// * pakai hook, mungkin?
const dataEksperimen = {
  tanggal: "2021-04-11",
  judul: "Spike",
  deskripsi: "Bla bla bla. Awesome, ye kan?",
};

const {
  judul: judulEksperimen,
  deskripsi: deskripsiEksperimen,
} = dataEksperimen;

export default function Depan() {
  const ScreenEksperimen = dynamic(
    () => import("../components/eksperimen/20210411").then((mod) => mod.Screen),
    {
      ssr: false,
      loading: () => (
        <>
          <p>
            Kamu sedang berada di eksperimen web interaktif halaman depan
            sakitkepala.dev
          </p>
          <p>Sedang memuat eksperimen...</p>
        </>
      ),
    }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {judulEksperimen} - Sebuah eksperimen web interaktif | Di halaman
          depan sakitkepala.dev
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ScreenEksperimen />
      </main>
    </div>
  );
}
