import Head from "next/head";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { getSemuaSortir } from "../lib/api/eksperimen";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";
import { NavLink } from "../components/nav-link";

import classnames from "classnames";
import old from "../styles/Dika.module.scss";
import layout from "../styles/Layout.module.scss";
import lab from "../styles/Lab.module.scss";

function ListItemEksperimen({ info }) {
  const { repo, tanggal, judul, source } = info;
  return (
    <article className={old["lab-artikel"]}>
      <NavLink href={`/lab/eksperimen/${repo}`}>
        <div className={old["lab-artikel__thumb"]}>
          <img />
        </div>
      </NavLink>

      <NavLink href={`/lab/eksperimen/${repo}`}>
        <h2 className={old["lab-artikel__judul"]}>{judul}</h2>
      </NavLink>
    </article>
  );
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 20 },
  animate: { opacity: 1, translateY: 0 },
};

export default function HalamanLab({ listInfo }) {
  return (
    <>
      <Head>
        <title>Arsip eksperimen dan projek di sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classnames(layout.halaman, lab.antiKoleps)}>
        <header className={layout.header}>
          <LogoHeader />
          <MenuNavigasi />
        </header>

        <motion.main className={lab.main} {...propsMotionTransisi}>
          <div className={lab.bagianLab}>
            <div>
              <h1 className={lab.teksHeadingBagian}>Projek</h1>
              <p className={lab.teksDeskripsiBagian}>
                Projek-projek menarik yang mau kucoba.
              </p>
            </div>

            <div className={lab.listArtikel}>
              <article
                className={classnames(lab.itemArtikel, lab.itemArtikelPertama)}
              >
                <NavLink href="https://www.github.com/sakitkepala/wkwkbudgetapp">
                  <div
                    className={lab.imageArtikel}
                    // TODO: nanti digenerate otomatis dari data list
                    style={{
                      backgroundImage: "url(/wkwkbudgetapp.jpg)",
                      backgroundSize: "cover",
                      backgroundPositionX: "center",
                      backgroundPositionY: "65%",
                    }}
                  />
                </NavLink>

                <h2 className={lab.judulArtikel}>
                  <NavLink href="https://www.github.com/sakitkepala/wkwkbudgetapp">
                    Budgeting App &#40;WIP&#41; <FiExternalLink size="18" />
                  </NavLink>
                </h2>
              </article>
            </div>
          </div>

          <div className={classnames(lab.bagianLab, lab.bagianEksperimen)}>
            <div style={{ color: "lightsteelblue" }}>
              <h1 className={lab.teksHeadingBagian}>Eksperimen</h1>
              <p className={lab.teksDeskripsiBagian}>
                <em>...to be developed</em>
              </p>
            </div>

            <div className={lab.listArtikel}>
              <article
                className={classnames(lab.itemArtikel, lab.itemArtikelPertama)}
              >
                <div
                  className={lab.imageArtikel}
                  style={{
                    borderColor: "lightsteelblue",
                    backgroundColor: "transparent",
                  }}
                >
                  <img />
                </div>

                <h2
                  className={lab.judulArtikel}
                  style={{ color: "lightsteelblue" }}
                >
                  <em>...coming soon!</em>
                </h2>
              </article>
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

export async function getStaticProps() {
  return {
    props: {
      listInfo: getSemuaSortir(),
    },
  };
}
