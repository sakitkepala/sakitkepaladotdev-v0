import Head from "next/head";
import { NavLink } from "../components/nav-link";
import { motion } from "framer-motion";
import { getTerbaru } from "../lib/api/eksperimen";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";

import name from "classnames";
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
          <LogoHeader />
          <MenuNavigasi />
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
