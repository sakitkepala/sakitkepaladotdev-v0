import { motion } from "framer-motion";
import { getSemuaSortir } from "../lib/api/eksperimen";

import { LayoutHalaman } from "../components/layout-halaman";
import { NavLink } from "../components/nav-link";

import styles from "../styles/Home.module.css";

function ListItemEksperimen({ info }) {
  const { repo, tanggal, judul, source } = info;
  return (
    <>
      <NavLink href={`/lab/eksperimen/${repo}`}>
        {/* TODO: styling, jangan pake nbsp wkwk */}
        {tanggal}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <u>{judul}</u>
      </NavLink>
      {source ? (
        <pre>
          [src]{" "}
          <NavLink href={source}>
            <u>{source}</u>
          </NavLink>
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
