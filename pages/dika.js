import React from "react";
import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { LogoHeader } from "../components/logo-header";
import { MenuNavigasi } from "../components/navigasi";
import { NavLink } from "../components/nav-link";
import { Footer } from "../components/footer-halaman";

import { IoMail } from "react-icons/io5";
import { SiBitbucket, SiGithub, SiGitlab, SiLinkedin } from "react-icons/si";
import classnames from "classnames";
import layout from "../styles/Layout.module.scss";
import dika from "../styles/HalamanDika.module.scss";

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

const jarakScroll = 400;
const vektorTransform = 300;

export default function HalamanDika() {
  const { scrollY } = useViewportScroll();

  const refSectionSitus = React.useRef(null);
  const pageYSectionSitus = useElementPageY(refSectionSitus);

  const opacityKartu = useTransform(
    scrollY,
    [
      pageYSectionSitus - 400,
      pageYSectionSitus - 200,
      pageYSectionSitus + 600,
      pageYSectionSitus + 800,
    ],
    [0, 1, 1, 0]
  );
  const yKartu = useTransform(
    scrollY,
    [pageYSectionSitus, pageYSectionSitus + 400],
    [42, 442]
  );
  const motionScrollKartu = {
    opacity: opacityKartu,
    y: yKartu,
  };

  return (
    <>
      <Head>
        <title>"Hai!" dari pembuat sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={layout.halaman}>
        <header className={layout.header}>
          <LogoHeader />
          <MenuNavigasi />
        </header>

        <motion.main {...propsMotionTransisi}>
          <section className={dika["bagian-hai"]}>
            <motion.div className={dika["bagian-hai__sambut"]}>
              <motion.h1 id="hai" className={dika["bagian-hai__sambut-teks"]}>
                Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                <u>
                  <a href="#dika" className={dika.link}>
                    Dika&#8601;
                  </a>
                </u>
                , pengrajin pengalaman interaktif untuk web.
                <span className={dika.anotasi}>&mdash;dan</span>{" "}
                <span className={dika.anotasi}>
                  <a href="#dika">software developer&#8601;</a>
                </span>
              </motion.h1>
            </motion.div>

            <motion.div className={dika["bagian-hai__deskripsi"]}>
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

              <p className={dika.selamatDatang}>Selamat datang!</p>
            </motion.div>
          </section>

          <section className={dika["bagian-situs"]} ref={refSectionSitus}>
            <motion.div className={dika.kartu} style={motionScrollKartu}>
              <p>
                Situs ini masih <em>work in progress</em>
                <span className={dika.footnotePointer}>&#42;</span> dan saya
                anggap akan <strong>selalu</strong> <em>work in progress</em>,
                dimana saya akan membuat antarmuka eksperimental untuk
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

              <p className={dika.footnote}>
                <span className={dika.footnotePointer}>&#42;</span> perhatikan
                animasi <em>scrolling</em> &amp; layout responsifnya masih
                ambyar 😆
              </p>
            </motion.div>
          </section>

          {/* <div id="dika" className={name(st.bagian, st["bagian-dika"])}>
            <motion.figure className={st["bagian-dika__penampakan"]}>
              <img
                className={st["bagian-dika__img-dika"]}
                src="/foto-dika.jpg"
                alt="Foto Dika"
              />
            </motion.figure>
          </div> */}

          <section id="sosial" className={dika["bagian-internet"]}>
            <div className={dika["bagian-internet__deskripsi"]}>
              <p>
                Saya bisa ditemui di internet, meskipun tidak begitu aktif main
                media sosial, lewat beberapa layanan berikut:
              </p>
            </div>

            <ul className={dika["bagian-internet__list-akun"]}>
              {listIcon.map(({ href, ikon }, i) => (
                <li
                  key={href}
                  className={classnames(
                    dika["bagian-internet__list-item-ikon"],
                    { [dika.itemPertama]: i === 0 }
                  )}
                >
                  <NavLink href={href}>{ikon}</NavLink>
                </li>
              ))}
            </ul>
          </section>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}

// My Custom Hook

function useElementPageY(refDOM) {
  const [pageY, setPageY] = React.useState(null);

  React.useEffect(() => {
    // Karena jalan pasti setelah mounting, ref DOM gak akan null waktu callback ini jalan
    const clientY = refDOM.current.getBoundingClientRect().y;
    setPageY(clientY + window.scrollY);
  }, []);

  return pageY;
}
