import Head from "next/head";
import { motion } from "framer-motion";

import dataLinkNavbar from "../config/link-navbar.json";
import { NavLink } from "../components/nav-link";
import { NavLinkItem } from "../components/nav-situs";

import styles from "../styles/Dika.module.scss";

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 2 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
};

console.log(styles.wadahHalaman);

export default function HalamanDika() {
  return (
    <>
      <Head>
        <title>"Hai!" dari pembuat sakitkepala.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wadahHalaman}>
        <nav className={styles.menuNav}>
          <NavLinkItem dataLink={dataLinkNavbar} />
        </nav>

        <motion.main className={styles.main} {...propsMotionTransisi}>
          {/* konten */}
          <div className={styles.bagianHai}>
            <div className={styles.dalaman}>
              <h1 id="hai" className={styles.haiHeading}>
                Hai! <span className="emoji-lambai">👋</span> Saya{" "}
                <u>
                  <a href="#dika">Dika</a>
                </u>
                , pengrajin pengalaman interaktif untuk web.
                <span className={styles.anotasi}>
                  &mdash;dan software developer
                </span>
              </h1>

              <div className="hai-tulisan">
                <p>
                  Ini situs web pribadi saya. Sungguh{" "}
                  <u>
                    <NavLink href="/lab">bukan situs portofolio</NavLink>
                  </u>
                  , melainkan sekedar pojokan sempitku di internet untuk{" "}
                  <u>
                    <NavLink href="/">bereksperimen</NavLink>
                  </u>{" "}
                  (<em>bermain-main?</em>) dengan teknologi antarmuka web dan
                  juga pengalaman interaktif di <em>browser</em>.
                </p>

                <p>Selamat datang!</p>
              </div>
            </div>
          </div>

          <div className="bagianLain">
            {/* <h2 id="situs">Tentang situs ini</h2> */}
            <p id="intro-situs">
              Omong-omong, karena sudah di sini kurasa kamu mau coba eksperimen
              terbaru saya di halaman{" "}
              <u>
                <NavLink href="/">&larr;Depan</NavLink>
              </u>
              . Sedangkan koleksi eksperimen-eksperimen yang terdahulu masih
              bisa diakses {/*, yang kukumpulkan di halaman{" "} */}
              lewat halaman{" "}
              <u>
                <NavLink href="/lab">Eksperimen&rarr;</NavLink>
              </u>{" "}
              di sebelah &mdash;barangkali penasaran.
            </p>
            <p>
              Setiap halaman dan interaksi-interaksi mikronya dibuat dengan
              penuh ketelitian dan kasih sayang :p demi menciptakan sedikit
              kesenangan[*] selama main-main di tempat ini ...kuharap :D
            </p>
            <p>
              Kalau kamu suka karya buatan saya, boleh lah sapa-sapa lewat{" "}
              <u>
                <a href="#sosial">kontak di bawah</a>
              </u>
              . Dengan senang hati, nanti saya balas sapanya.
            </p>
            <p>Semoga suka {":))"}</p>

            <p>
              [*] Saya sadar desain visualnya jelek, mohon maaf. Semoga tidak
              mengurangi kesenangannya, ya.
            </p>
          </div>

          <div style={{ display: "none" }}>
            <p>***</p>

            <br />

            <h2 id="dika">Lebih banyak tentang Dika</h2>
            <p>Konten yang awesome, ye kan?</p>

            <h2 id="sakitkepala">Tentang `sakitkepala`</h2>
            <p>Konten yang awesome, ye kan?</p>

            <h2 id="sosial">Kirim sapa</h2>
            <p>
              Saya tetap bisa dikontak di internet lewat beberapa layanan
              berikut (meski bukan termasuk aktif sebagai warganet media
              sosial):
            </p>
            <ul>
              <li>Email</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Gitlab</li>
            </ul>
            <p>Bagaimanapun, terima kasih sudah menyempatkan waktu.</p>

            <br />

            <p>:coffee:</p>
          </div>
        </motion.main>
      </div>
    </>
  );
}
