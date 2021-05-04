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
    <article className={st["lab-artikel"]}>
      <NavLink href={`/lab/eksperimen/${repo}`}>
        <div className={st["lab-artikel__thumb"]}>
          <img />
        </div>
      </NavLink>

      <NavLink href={`/lab/eksperimen/${repo}`}>
        <h2 className={st["lab-artikel__judul"]}>{judul}</h2>
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
              <h1
                className={st["bagian-lab__heading-deskripsi"]}
                style={{ color: "lightsteelblue" }}
              >
                Eksperimen
              </h1>

              <p className={st["bagian-lab__tulisan-deskripsi"]}>
                {/* TODO: */}
                <em style={{ color: "lightsteelblue" }}>...to be developed</em>
              </p>
            </div>

            <ul className={st["bagian-lab__list-eksperimen"]}>
              <li>
                {/* TODO: */}
                <article className={st["lab-artikel"]}>
                  {/* <NavLink href="/dika"> */}
                  <div
                    className={st["lab-artikel__thumb"]}
                    style={{
                      borderColor: "lightsteelblue",
                      backgroundColor: "transparent",
                    }}
                  >
                    <img />
                  </div>
                  {/* </NavLink> */}

                  {/* <NavLink href="/dika"> */}
                  <h2
                    className={st["lab-artikel__judul"]}
                    style={{ color: "lightsteelblue" }}
                  >
                    ...to be developed
                  </h2>
                  {/* </NavLink> */}
                </article>
              </li>
            </ul>

            <div
              className={name(
                st["bagian-lab__deskripsi"],
                st["bagian-lab__deskripsi--projek"]
              )}
            >
              <h1 className={st["bagian-lab__heading-deskripsi"]}>Projek</h1>

              <p className={st["bagian-lab__tulisan-deskripsi"]}>
                Projek-projek menarik yang mau kucoba.
              </p>
            </div>

            <ul className={st["bagian-lab__list-projek"]}>
              <li>
                <article className={st["lab-artikel"]}>
                  <NavLink href="https://www.github.com/sakitkepala/wkwkbudgetapp">
                    <div
                      className={st["lab-artikel__thumb"]}
                      style={{
                        backgroundImage: "url(/wkwkbudgetapp.jpg)",
                        backgroundSize: "cover",
                        backgroundPositionX: "center",
                        backgroundPositionY: "65%",
                      }}
                    />
                  </NavLink>

                  <h2 className={st["lab-artikel__judul"]}>
                    <NavLink href="https://www.github.com/sakitkepala/wkwkbudgetapp">
                      Budgeting App &#40;WIP&#41;
                    </NavLink>
                  </h2>
                </article>
              </li>
            </ul>
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
