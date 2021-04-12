import { motion } from "framer-motion";
import hydrate from "next-mdx-remote/hydrate";
import {
  getListInfoPostingan,
  getPostinganMenurutSlug,
} from "../../lib/api/tulisan";

import { LayoutHalaman } from "../../components/layout-halaman";

import styles from "../../styles/Home.module.css";

export async function getStaticPaths() {
  const paths = getListInfoPostingan().map((postingan) => ({
    params: { slug: postingan.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postingan = await getPostinganMenurutSlug(params.slug);

  return {
    props: {
      postingan,
    },
  };
}

const propsMotionTransisi = {
  initial: { opacity: 0, translateY: 2 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
};

export default function HalamanPostingan({ postingan }) {
  const { sumber, info } = postingan;
  const konten = hydrate(sumber);

  return (
    <LayoutHalaman title={`${info.judul} - Sebuah tulisan di sakitkepala.dev`}>
      <motion.main
        className={`lembar-tulisan ${styles.main}`}
        {...propsMotionTransisi}
      >
        <h1>{info.judul}</h1>
        {konten}
      </motion.main>
    </LayoutHalaman>
  );
}
