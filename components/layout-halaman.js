import Head from "next/head";
import { NavSitus } from "../components/nav-situs";

import styles from "../styles/Home.module.css";

function LayoutHalaman({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <NavSitus layoutId="nav-shared" />

        {/* <!----- OUTPUT CHILDREN -----> */}
        {children}
        {/* <!----- OUTPUT CHILDREN -----> */}
      </div>
    </>
  );
}

export { LayoutHalaman };
