import Head from "next/head";
import Link from "next/link";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import name from "classnames";
import { SiBitbucket, SiGithub, SiGitlab, SiLinkedin } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { NavLink } from "../components/nav-link";

import st from "../styles/Dika.module.scss";
import React from "react";

const listIcon = [
  { href: "mailto:andikapriyotamad@gmail.com", ikon: <IoMail size="64" /> },
  {
    href: "https://linkedin.com/in/andikapriyotama",
    ikon: <SiLinkedin size="64" />,
  },
  { href: "https://github.com/sakitkepala", ikon: <SiGithub size="64" /> },
  {
    href: "https://bitbucket.org/andikapriyotama",
    ikon: <SiBitbucket size="64" />,
  },
  { href: "https://gitlab.com/andikapriyotama", ikon: <SiGitlab size="64" /> },
];

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 2 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
};

const bungkusH1 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const tulisanH1 = {
  hidden: { opacity: 0, translateY: "1em" },
  show: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
};

export default function HalamanDika() {
  const { scrollY } = useViewportScroll();

  const translateYSambut = useTransform(scrollY, [0, 260], [0, 280]);
  const translateXSambut0 = useTransform(
    scrollY,
    [140 + 90, 240 + 90],
    [0, 12]
  );
  const translateXSambut1 = useTransform(
    scrollY,
    [140 + 60, 240 + 60],
    [0, 12]
  );
  const translateXSambut2 = useTransform(
    scrollY,
    [140 + 30, 240 + 30],
    [0, 12]
  );
  const translateXSambut3 = useTransform(scrollY, [140, 240], [0, 12]);
  const opacitySambutTeks0 = useTransform(
    scrollY,
    [140 + 90, 240 + 90],
    [1, 0]
  );
  const opacitySambutTeks1 = useTransform(
    scrollY,
    [140 + 60, 240 + 60],
    [1, 0]
  );
  const opacitySambutTeks2 = useTransform(
    scrollY,
    [140 + 30, 240 + 30],
    [1, 0]
  );
  const opacitySambutTeks3 = useTransform(scrollY, [140, 240], [1, 0]);

  const translateYDeskripsi = useTransform(
    scrollY,
    [0, 250, 250, 600],
    [0, 250, 250, 400]
  );
  const opacityDeskripsi = useTransform(scrollY, [250, 580], [1, 0]);

  const translateYSitus = useTransform(scrollY, [560, 800], [-30, 0]);

  return (
    <>
      <Head>
        <title>"Hai!" dari pembuat sakitkepala.dev</title>
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

        <main>
          <div className={name(st.bagian, st["bagian-hai"])}>
            <motion.div
              className={st["bagian-hai__sambut"]}
              style={{ translateY: translateYSambut }}
            >
              <motion.h1
                id="hai"
                className={st["bagian-hai__sambut-teks"]}
                variants={bungkusH1}
                initial="hidden"
                animate="show"
              >
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
                  variants={tulisanH1}
                  style={{
                    opacity: opacitySambutTeks0,
                    translateY: translateXSambut0,
                  }}
                >
                  Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                  <u>
                    <a href="#dika" className={st.link}>
                      Dika&#8601;
                    </a>
                  </u>
                  ,
                </motion.span>{" "}
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
                  variants={tulisanH1}
                  style={{
                    opacity: opacitySambutTeks1,
                    translateY: translateXSambut1,
                  }}
                >
                  pengrajin pengalaman
                </motion.span>{" "}
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
                  variants={tulisanH1}
                  style={{
                    opacity: opacitySambutTeks2,
                    translateY: translateXSambut2,
                  }}
                >
                  interaktif untuk web.
                  <span className={st.anotasi}>&mdash;dan</span>
                </motion.span>{" "}
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
                  variants={tulisanH1}
                  style={{
                    opacity: opacitySambutTeks3,
                    translateY: translateXSambut3,
                  }}
                >
                  <span className={st.anotasi}>
                    <a href="#dika">software developer&#8601;</a>
                  </span>
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              className={st["bagian-hai__deskripsi"]}
              style={{
                translateY: translateYDeskripsi,
                opacity: opacityDeskripsi,
              }}
            >
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

              <p>Selamat datang!</p>
            </motion.div>
          </div>

          <div className={name(st.bagian, st["bagian-situs"])}>
            <motion.div
              className={st["heading-bagian"]}
              style={{
                translateY: translateYSitus,
              }}
            >
              Tentang Situs Ini
            </motion.div>
            <div className={st["bagian-situs__deskripsi"]}>
              <p>
                Situs ini masih <em>work in progress</em> dan saya anggap akan{" "}
                &#42;selalu&#42; <em>work in progress</em>, dimana saya akan
                membuat antarmuka eksperimental untuk halaman-halaman situs ini
                sebagai projek yang berkelanjutan.
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
            </div>
          </div>

          <div id="dika" className={name(st.bagian, st["bagian-dika"])}>
            <div className={st["heading-bagian"]}>Tentang Dika</div>
            <div className={st["bagian-dika__konten"]}>...</div>
          </div>

          <div className={name(st.bagian, st["bagian-internet"])}>
            <div className={st["heading-bagian"]}>Di Internet</div>

            <div className={st["bagian-internet__deskripsi"]}>
              <p>
                Saya bisa ditemukan di internet lewat beberapa layanan berikut
                meski bukan warganet media sosial yang aktif:
              </p>
            </div>

            <ul className={st["bagian-internet__list-akun"]}>
              {listIcon.map(({ href, ikon }) => (
                <li
                  key={href}
                  className={st["bagian-internet__list-item-ikon"]}
                >
                  <NavLink href={href}>{ikon}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <footer className={st.footer}>
          <div className={st["footer__logo"]}>
            <NavLink href="/">&gt; sakitkepala.dev{/* &#47; */}</NavLink>
          </div>

          <div className={st["footer__hak-cipta"]}>
            {new Date().getFullYear()} &copy; Andika Priyotama Dharminto
          </div>

          <div className={st["footer__emoji"]}>☕</div>
        </footer>
      </div>
    </>
  );
}
