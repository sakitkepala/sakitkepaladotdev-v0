import Head from "next/head";
import { NavLink } from "../components/nav-link";
import Link from "next/link";
import name from "classnames";
import { motion } from "framer-motion";
import { getTerbaru } from "../lib/api/eksperimen";

import st from "../styles/Dika.module.scss";

export async function getStaticProps() {
  return {
    props: {
      eksperimen: getTerbaru(),
    },
  };
}

const propsMotionTransisi = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.5, duration: 0.4 } },
};

export default function HalamanDepan({ eksperimen }) {
  return (
    <>
      <Head>
        <title>
          Sebuah eksperimen web interaktif di halaman depan sakitkepala.dev
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={st["halaman-depan-dummy"]}>
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

        <motion.main className={st["main-dummy"]} {...propsMotionTransisi}>
          <div className={st["artikel-dummy"]}>
            <h1 className={st["artikel-dummy__heading"]}>TO BE DEVELOPED</h1>
            <div className={st["artikel-dummy__deskripsi"]}>
              Please come back later or visit available links above for
              something uninteresting.
            </div>
          </div>
        </motion.main>

        <footer className={name(st.footer, st["footer-dummy"])}>
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
