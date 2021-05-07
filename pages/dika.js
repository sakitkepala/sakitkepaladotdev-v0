import React from "react";
import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";
import { NavLink } from "../components/nav-link";

import { IoMail } from "react-icons/io5";
import { SiBitbucket, SiGithub, SiGitlab, SiLinkedin } from "react-icons/si";
import classname from "classnames";
import styles from "../styles/dika.module.scss";

const listIcon = [
  { href: "mailto:andikapriyotamad@gmail.com", ikon: <IoMail size="100%" /> },
  {
    href: "https://linkedin.com/in/andikapriyotama",
    ikon: <SiLinkedin size="100%" />,
  },
  { href: "https://github.com/sakitkepala", ikon: <SiGithub size="100%" /> },
  {
    href: "https://bitbucket.org/andikapriyotama",
    ikon: <SiBitbucket size="100%" />,
  },
  {
    href: "https://gitlab.com/andikapriyotama",
    ikon: <SiGitlab size="100%" />,
  },
];

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 20 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
};

const bungkusH1 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const tulisanH1 = {
  hidden: { opacity: 0, translateY: "1em" },
  show: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.5 },
  },
};

const tulisanDeskripsi = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1, duration: 0.25 },
  },
};

export default function HalamanDika() {
  const { scrollY } = useViewportScroll();
  // logika transform scroll
  // ...

  return (
    <>
      <Head>
        <title>"Hai!" dari pembuat sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.halaman}>
        <header className={styles.header}>
          <LogoHeader />
          <MenuNavigasi />
        </header>

        <motion.main {...propsMotionTransisi}>
          <div className={styles["bagian-hai"]}>
            <motion.div className={styles["bagian-hai__sambut"]}>
              <motion.h1 id="hai" className={styles["bagian-hai__sambut-teks"]}>
                Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                <u>
                  <a href="#dika" className={styles.link}>
                    Dika&#8601;
                  </a>
                </u>
                , pengrajin pengalaman interaktif untuk web.
                <span className={styles.anotasi}>&mdash;dan</span>{" "}
                <span className={styles.anotasi}>
                  <a href="#dika">software developer&#8601;</a>
                </span>
              </motion.h1>
            </motion.div>

            <motion.div className={styles["bagian-hai__deskripsi"]}>
              <p>
                Ini situs web pribadi saya. Sungguh{" "}
                <u>
                  <NavLink href="/lab">bukan situs portofolio</NavLink>
                </u>
                , melainkan sekedar pojokan sempitku di internet untuk{" "}
                <u>
                  <NavLink href="/">bereksperimen</NavLink>
                </u>{" "}
                (<em>bermain-main?</em>) dengan teknologi antarmuka web dan juga
                pengalaman interaktif di <em>browser</em>.
              </p>

              <p className={styles.selamatDatang}>Selamat datang!</p>
            </motion.div>
          </div>

          <div className={styles["bagian-situs"]}>
            <motion.div className={styles["heading-bagian"]}>
              Tentang Situs Ini
            </motion.div>

            <motion.div className={styles["bagian-situs__deskripsi"]}>
              <div className={styles.kartu}>
                <p>
                  Situs ini masih <em>work in progress</em>
                  <span className={styles.footnote}>&#42;</span> dan saya anggap
                  akan <strong>selalu</strong> <em>work in progress</em>, dimana
                  saya akan membuat antarmuka eksperimental untuk
                  halaman-halaman situs ini sebagai projek yang berkelanjutan.
                </p>

                <p>
                  Eksperimen web interaktif akan saya sajikan di halaman{" "}
                  <u>
                    <NavLink href="/">&#8598;Depan</NavLink>
                  </u>{" "}
                  dan arsip eksperimen-eksperimen yang terdahulunya akan saya
                  kumpulkan di halaman{" "}
                  <u>
                    <NavLink href="/lab">Lab&#8599;</NavLink>
                  </u>{" "}
                  bersama projek-projek lainnya.
                </p>

                <p>
                  Sambil menunggu apa yang akan saya buat di sini, silakan boleh
                  sapa-sapa lewat{" "}
                  <u>
                    <a href="#sosial">kontak di bagian bawah&#8600;</a>
                  </u>
                  .
                </p>

                <p>Dengan senang hati, nanti saya balas sapanya 😄</p>

                <p>
                  <span className={styles.footnote}>
                    &#42; perhatikan animasi <em>scrolling</em> &amp; layout
                    responsifnya masih ambyar 😆
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* <div id="dika" className={name(st.bagian, st["bagian-dika"])}>
            <motion.figure className={st["bagian-dika__penampakan"]}>
              <img
                className={st["bagian-dika__img-dika"]}
                src="/foto-dika.jpg"
                alt="Foto Dika"
              />
            </motion.figure>
          </div> */}

          <section id="sosial" className={styles["bagian-internet"]}>
            <div className={styles["heading-bagian"]}>Di Internet</div>

            <div className={styles["bagian-internet__deskripsi"]}>
              <p>
                Saya bisa ditemui di internet, meskipun tidak begitu aktif main
                media sosial, lewat beberapa layanan berikut:
              </p>
            </div>

            <ul className={styles["bagian-internet__list-akun"]}>
              {listIcon.map(({ href, ikon }, i) => (
                <li
                  key={href}
                  className={classname(
                    styles["bagian-internet__list-item-ikon"],
                    { [styles.itemPertama]: i === 0 }
                  )}
                >
                  <NavLink href={href}>{ikon}</NavLink>
                </li>
              ))}
            </ul>
          </section>
        </motion.main>

        <footer className={styles.footer}>
          <div className={styles["footer__logo"]}>
            <NavLink href="/">&#47; Eksperimennya Dika</NavLink>
          </div>

          <div className={styles["footer__hak-cipta"]}>
            {new Date().getFullYear()}
            <span>☕&#10157;</span> Andika Priyotama D.
          </div>
        </footer>
      </div>
    </>
  );
}
