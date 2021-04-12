import { motion } from "framer-motion";
import { getSemuaSortir } from "../lib/api/eksperimen";

import Link from "next/link";
import { LayoutHalaman } from "../components/layout-halaman";

import styles from "../styles/Home.module.css";

function ListItemEksperimen({ info }) {
  const { repo, tanggal, judul, source } = info;
  return (
    <>
      <Link href={`/lab/eksperimen/${repo}`}>
        <a>
          {/* TODO: styling, jangan pake nbsp wkwk */}
          {tanggal}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    </>
  );
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateX: 20 },
  animate: { opacity: 1, translateX: 0 },
};

export default function HalamanLab({ listInfo }) {
  return (
    <LayoutHalaman title="Arsip eksperimen di sakitkepala.dev">
      <motion.main className={styles.main} {...propsMotionTransisi}>
        <h1>Lab</h1>
        <p>Arsip eksperimen-eksperimen halaman interaktif yang lama:</p>

        <ul>
          {listInfo.map((eksperimen) => (
            <li key={eksperimen.id}>
              <ListItemEksperimen info={eksperimen} />
            </li>
          ))}
        </ul>
      </motion.main>
    </LayoutHalaman>
  );
}

export async function getStaticProps() {
  return {
    props: {
      listInfo: getSemuaSortir(),
    },
  };
}
