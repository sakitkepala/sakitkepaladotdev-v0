import Head from "next/head";
import { NavLink } from "../components/nav-link";
import { motion } from "framer-motion";
import { getTerbaru } from "../lib/api/eksperimen";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";

import name from "classnames";
import old from "../styles/Dika.module.scss";
import layout from "../styles/Layout.module.scss";

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

      <div className={old["halaman-depan-dummy"]}>
        <header className={layout.header}>
          <LogoHeader />
          <MenuNavigasi />
        </header>

        <motion.main className={old["main-dummy"]} {...propsMotionTransisi}>
          <div className={old["artikel-dummy"]}>
            <h1 className={old["artikel-dummy__heading"]}>TO BE DEVELOPED</h1>
            <div className={old["artikel-dummy__deskripsi"]}>
              Please come back later or visit available links above for
              something uninteresting.
            </div>
          </div>
        </motion.main>

        <footer className={layout.footer}>
          <div className={layout["footer__logo"]}>
            <NavLink href="/">&#47; Eksperimennya Dika</NavLink>
          </div>

          <div className={layout["footer__hak-cipta"]}>
            {new Date().getFullYear()}
            <span>☕&#10157;</span> Andika Priyotama D.
          </div>
        </footer>
      </div>
    </>
  );
}
