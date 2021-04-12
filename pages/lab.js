import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getSemuaSortir } from "../lib/api/eksperimen";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      data: getSemuaSortir(),
    },
  };
}

export default function Lab({ data }) {
  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0, translateX: 20 }}
      animate={{ opacity: 1, translateX: 0 }}
    >
      <h1>Lab</h1>

      <p>Arsip eksperimen-eksperimen halaman interaktif yang lama:</p>

      <ul>
        {data.map(({ id, tanggal, judul, repo, source }) => (
          <li key={id}>
            <Link href={`/lab/eksperimen/${repo}`}>
              <a>
                {/* TODO: styling, jangan pake nbsp wkwk */}
                {tanggal}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <u>{judul}</u>
              </a>
            </Link>
            {source ? (
              <pre>
                [src]{" "}
                <Link href={source}>
                  <a>
                    <u>{source}</u>
                  </a>
                </Link>
              </pre>
            ) : null}
          </li>
        ))}
      </ul>
    </motion.main>
  );
}
