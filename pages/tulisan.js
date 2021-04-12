import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getListInfoPostingan } from "../lib/api/tulisan";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      listPostingan: getListInfoPostingan(),
    },
  };
}

export default function Tulisan({ listPostingan }) {
  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0, translateX: 20 }}
      animate={{ opacity: 1, translateX: 0 }}
    >
      <h1>Tulisan</h1>

      <p>
        Catatan pembelajaran dalam front-end development, web interaktif, atau
        tulisan apapun yang saya rasa pingin dibagi saja :D
      </p>

      <ul>
        {listPostingan.map(({ id, tanggal, judul, slug }) => (
          <li key={id}>
            <Link href={`/tulisan/${slug}`}>
              <a>
                {/* TODO: styling, jangan pake nbsp wkwk */}
                {tanggal}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <u>{judul}</u> &rarr;
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </motion.main>
  );
}
