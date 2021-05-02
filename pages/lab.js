import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { getSemuaSortir } from "../lib/api/eksperimen";
import { NavLink } from "../components/nav-link";

import styles from "../styles/Dika.module.scss";

function ListItemEksperimen({ info }) {
  const { repo, tanggal, judul, source } = info;
  return (
    <div className="eksperimen-item">
      <div className="eksperimen-entri">
        <NavLink href={`/lab/eksperimen/${repo}`}>
          {/* TODO: styling, jangan pake nbsp wkwk */}
          {tanggal}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <u>{judul}</u>
        </NavLink>
      </div>
      {!source ? null : (
        <pre className="eksperimen-source">
          [src]{" "}
          <NavLink href={source}>
            <u>{source}</u>
          </NavLink>
        </pre>
      )}
    </div>
  );
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateX: 20 },
  animate: { opacity: 1, translateX: 0 },
};

export default function HalamanLab({ listInfo }) {
  return (
    <>
      <Head>
        <title>Arsip eksperimen di sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wadahHalaman}>
        <div className={styles.logo}>
          <NavLink href="/">
            andika
            <br />
            priyotama
            {/* <br />
            sakitkepala.dev&#47; */}
          </NavLink>
        </div>

        <nav className={styles.menuNav}>
          <Link href="/">
            <a className={styles.linkMenu}>Depan</a>
          </Link>
          <Link href="/lab">
            <a className={styles.linkMenu}>Lab</a>
          </Link>
          <Link href="/dika">
            <a className={styles.linkMenu}>Dika</a>
          </Link>
        </nav>

        <motion.main className={styles.main} {...propsMotionTransisi}>
          <div className={styles.bagianDeskripsi}>
            <div className={styles.dalaman}>
              <h1>Lab</h1>
              <p>Arsip eksperimen-eksperimen halaman interaktif yang lama:</p>

              <ul>
                {listInfo.map((eksperimen) => (
                  <li key={eksperimen.id}>
                    <ListItemEksperimen info={eksperimen} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      listInfo: getSemuaSortir(),
    },
  };
}
