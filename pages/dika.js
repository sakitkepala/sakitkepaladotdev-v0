import React from "react";
import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";
import { NavLink } from "../components/nav-link";

import { IoMail } from "react-icons/io5";
import { SiBitbucket, SiGithub, SiGitlab, SiLinkedin } from "react-icons/si";
import name from "classnames";
import st from "../styles/dika.module.scss";

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

      <div className={st.halaman}>
        <header className={st.header}>
          <LogoHeader />
          <MenuNavigasi />
        </header>

        <motion.main {...propsMotionTransisi}>
          <div className={st["bagian-hai"]}>
            <motion.div className={st["bagian-hai__sambut"]}>
              <motion.h1 id="hai" className={st["bagian-hai__sambut-teks"]}>
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
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
                >
                  pengrajin pengalaman
                </motion.span>{" "}
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
                  variants={tulisanH1}
                >
                  interaktif untuk web.
                  <span className={st.anotasi}>&mdash;dan</span>
                </motion.span>{" "}
                <motion.span
                  className={st["bagian-hai__sambut-teks--span-animasi"]}
                  variants={tulisanH1}
                >
                  <span className={st.anotasi}>
                    <a href="#dika">software developer&#8601;</a>
                  </span>
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div className={st["bagian-hai__deskripsi"]}>
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
            <motion.div className={st["heading-bagian"]}>
              Tentang Situs Ini
            </motion.div>

            <motion.div className={st["bagian-situs__deskripsi"]}>
              <p>
                Situs ini masih <em>work in progress</em>&#42; dan saya anggap
                akan <strong>selalu</strong> <em>work in progress</em>, dimana
                saya akan membuat antarmuka eksperimental untuk halaman-halaman
                situs ini sebagai projek yang berkelanjutan.
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
                &#42; perhatikan animasi <em>scrolling</em> &amp; layout
                responsifnya masih ambyar 😆
              </p>
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

          {/* <div id="sosial" className={name(st.bagian, st["bagian-internet"])}>
            <div className={st["heading-bagian"]}>Di Internet</div>

            <div className={st["bagian-internet__deskripsi"]}>
              <p>
                Meskipun tidak begitu aktif main media sosial, saya masih bisa
                ditemui di internet lewat beberapa layanan berikut:
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
          </div> */}
        </motion.main>

        <footer className={st.footer}>
          <div className={st["footer__logo"]}>
            <NavLink href="/">&#47; Eksperimennya Dika{/* &#47; */}</NavLink>
          </div>

          <div className={st["footer__hak-cipta"]}>
            {new Date().getFullYear()} {/* &copy; */}
            <span>☕&#10157;</span> Andika Priyotama D.
          </div>
        </footer>
      </div>
    </>
  );
}
