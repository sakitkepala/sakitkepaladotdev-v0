import { motion } from "framer-motion";
import { getTerbaru } from "../lib/api/eksperimen";

import { LayoutHalaman } from "../components/layout-halaman";
import { ScreenEksperimen } from "../components/eksperimen";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      eksperimen: getTerbaru(),
    },
  };
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 2 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function HalamanDepan({ eksperimen }) {
  return (
    <LayoutHalaman
      title={`${eksperimen.judul} - Sebuah eksperimen web interaktif di halaman depan sakitkepala.dev`}
    >
      <motion.main className={styles.main} {...propsMotionTransisi}>
        <ScreenEksperimen data={eksperimen}>
          <div className="screen-loading">
            <p>
              Kamu sedang berada di eksperimen web interaktif halaman depan
              sakitkepala.dev
            </p>

            <p>Sedang memuat eksperimen...</p>
          </div>
        </ScreenEksperimen>
      </motion.main>
    </LayoutHalaman>
  );
}
