import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import name from "classnames";
import { getSemuaSortir } from "../lib/api/eksperimen";
import { NavLink } from "../components/nav-link";

import st from "../styles/Dika.module.scss";

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
        <title>Arsip eksperimen dan projek di sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={st.halaman}>
        <header className={st.header}>
          <motion.div className={st["header__logo"]}>
            <NavLink href="/">
              <div className={st["logo-dika"]}>
                <span className={st["logo-dika__stack"]}>&gt; andika</span>
                <span className={st["logo-dika__stack"]}>priyotama</span>
              </div>
            </NavLink>
          </motion.div>

          <nav className={st.navigasi}>
            <Link href="/">
              <a className={st["navigasi__link"]}>Depan</a>
            </Link>
            <Link href="/lab">
              <a className={st.navigasi__link}>Lab</a>
            </Link>
            <Link href="/dika">
              <a className={st.navigasi__link}>Dika</a>
            </Link>
          </nav>
        </header>

        <motion.main {...propsMotionTransisi}>
          <div className={st["bagian-lab"]}>
            <div
              className={name(
                st["bagian-lab__deskripsi"],
                st["bagian-lab__deskripsi--eksperimen"]
              )}
            >
              <h1 className={st["bagian-lab__heading-deskripsi"]}>
                Eksperimen
              </h1>
              <p>Koleksi eksperimen-eksperimen...</p>
            </div>

            <ul className={st["bagian-lab__list-eksperimen"]}>
              {listInfo.map((eksperimen) => (
                <li key={eksperimen.id}>
                  <ListItemEksperimen info={eksperimen} />
                </li>
              ))}
            </ul>

            <div
              className={name(
                st["bagian-lab__deskripsi"],
                st["bagian-lab__deskripsi--projek"]
              )}
            >
              <h1 className={st["bagian-lab__heading-deskripsi"]}>Projek</h1>
              <p>Koleksi eksperimen-eksperimen...</p>
            </div>

            <div className={st["bagian-lab__list-projek"]}>...</div>
          </div>
        </motion.main>

        <footer className={st.footer}>
          <div className={st["footer__logo"]}>
            <NavLink href="/">&#47; Eksperimennya Dika{/* &#47; */}</NavLink>
          </div>

          <div className={st["footer__hak-cipta"]}>
            {new Date().getFullYear()} {/* &copy; */}
            <span style={{ fontSize: "1.6em" }}>☕&#10157;</span> Andika
            Priyotama D.
          </div>
        </footer>
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
