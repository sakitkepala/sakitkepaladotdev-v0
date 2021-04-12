import { motion } from "framer-motion";
import { getDetailRepo, getSemuaSortir } from "../../../lib/api/eksperimen";
import { ScreenEksperimen } from "../../../components/eksperimen";

import { LayoutHalaman } from "../../../components/layout-halaman";

import styles from "../../../styles/Home.module.css";

export async function getStaticProps({ params }) {
  return {
    props: {
      eksperimen: getDetailRepo(params.repo),
    },
  };
}

export async function getStaticPaths() {
  const paths = getSemuaSortir().map(({ repo }) => ({ params: { repo } }));
  return {
    paths,
    fallback: false,
  };
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 2 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function HalamanEksperimen({ eksperimen }) {
  return (
    <LayoutHalaman
      title={`${eksperimen.judul} - Sebuah eksperimen web interaktif di sakitkepala.dev`}
    >
      <motion.main className={styles.main} {...propsMotionTransisi}>
        <ScreenEksperimen data={eksperimen}>
          <div className="screen-loading">
            <p>
              Kamu sedang berada di arsip eksperimen web interaktif
              sakitkepala.dev
            </p>

            <p>Sedang memuat eksperimen...</p>
          </div>
        </ScreenEksperimen>
      </motion.main>
    </LayoutHalaman>
  );
}
