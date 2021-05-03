import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import name from "classnames";
import { SiBitbucket, SiGithub, SiGitlab, SiLinkedin } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { NavLink } from "../components/nav-link";

import style from "../styles/Dika.module.scss";

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
  return (
    <>
      <Head>
        <title>"Hai!" dari pembuat sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.halaman}>
        <div className={style.logo}>
          <NavLink href="/">
            &gt; andika
            <br />
            priyotama
            {/* <br />
            sakitkepala.dev&#47; */}
          </NavLink>
        </div>

        <nav className={style.navigasi}>
          <Link href="/">
            <a className={style["navigasi__link"]}>Depan</a>
          </Link>
          <Link href="/lab">
            <a className={style.navigasi__link}>Lab</a>
          </Link>
          <Link href="/dika">
            <a className={style.navigasi__link}>Dika</a>
          </Link>
        </nav>

        <motion.main className={style.main} {...propsMotionTransisi}>
          {/* konten */}
          <div className={name(style.bagian, style["bagian-hai"])}>
            <div className={style["bagian-hai__sambut"]}>
              <h1 id="hai" className={style["bagian-hai__sambut-teks"]}>
                Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                <u>
                  <a href="#dika" className={style.link}>
                    Dika&#8601;
                  </a>
                </u>
                , pengrajin pengalaman interaktif untuk web.
                <span className={style.anotasi}>
                  &mdash;dan <a href="#dika">software developer&#8601;</a>
                </span>
              </h1>
            </div>

            <div className={style["bagian-hai__deskripsi"]}>
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
            </div>
          </div>

          <div className={name(style.bagian, style["bagian-situs"])}>
            <div className={style["heading-bagian"]}>Tentang Situs Ini</div>
            <div className={style["bagian-situs__deskripsi"]}>
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

          <div id="dika" className={name(style.bagian, style["bagian-dika"])}>
            <div className={style["heading-bagian"]}>Tentang Dika</div>
            <div className={style["bagian-dika__konten"]}>...</div>
          </div>

          <div className={name(style.bagian, style["bagian-internet"])}>
            <div className={style["heading-bagian"]}>Di Internet</div>

            <div className={style["bagian-internet__deskripsi"]}>
              <p>
                Saya bisa ditemukan di internet lewat beberapa layanan berikut
                meski bukan warganet media sosial yang aktif:
              </p>
            </div>

            <ul className={style["bagian-internet__list-akun"]}>
              {listIcon.map(({ href, ikon }) => (
                <li
                  key={href}
                  className={style["bagian-internet__list-item-ikon"]}
                >
                  <NavLink href={href}>{ikon}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.main>

        <footer className={style.footer}>
          <div className={style["footer__logo"]}>
            <NavLink href="/">&gt; sakitkepala.dev{/* &#47; */}</NavLink>
          </div>

          <div className={style["footer__hak-cipta"]}>
            {new Date().getFullYear()} &copy; Andika Priyotama Dharminto
          </div>

          <div className={style["footer__emoji"]}>☕</div>
        </footer>
      </div>
    </>
  );
}
