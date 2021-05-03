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

export default function HalamanDika() {
  const { scrollY } = useViewportScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, 300]);

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

        <motion.main className={st.main} {...propsMotionTransisi}>
          {/* konten */}
          <div className={name(st.bagian, st["bagian-hai"])}>
            <div className={st["bagian-hai__sambut"]}>
              <h1 id="hai" className={st["bagian-hai__sambut-teks"]}>
                <span className={st["bagian-hai__sambut-teks--span-animasi"]}>
                  Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                  <u>
                    <a href="#dika" className={st.link}>
                      Dika&#8601;
                    </a>
                  </u>
                  ,
                </span>{" "}
                <span className={st["bagian-hai__sambut-teks--span-animasi"]}>
                  pengrajin pengalaman
                </span>{" "}
                <span className={st["bagian-hai__sambut-teks--span-animasi"]}>
                  interaktif untuk web.
                  <span className={st.anotasi}>&mdash;dan</span>
                </span>{" "}
                <span className={st["bagian-hai__sambut-teks--span-animasi"]}>
                  <span className={st.anotasi}>
                    <a href="#dika">software developer&#8601;</a>
                  </span>
                </span>
              </h1>
            </div>

            <motion.div
              className={st["bagian-hai__deskripsi"]}
              style={{ translateY }}
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
            <div className={st["heading-bagian"]}>Tentang Situs Ini</div>
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
        </motion.main>

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
