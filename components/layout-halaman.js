import { motion } from "framer-motion";
import Head from "next/head";
import { NavLinkItem } from "../components/nav-situs";
import dataLinkNavbar from "../config/link-navbar.json";

import styles from "../styles/layout.module.css";

const NavBar = () => {
  return (
    <motion.nav layoutId="nav-shared" className="nav-header">
      <NavLinkItem dataLink={dataLinkNavbar} />
    </motion.nav>
  );
};

function LayoutHalaman({ title, navigasi, children }) {
  // TODO: NavBar di Layout ini diberi style generik semua halaman, gak default.
  // Default-nya dari komponen unstyled, supaya bisa di-override dari halaman langsung.
  // Yang generik dibuat di Layout ini:
  const elemenNavigasi = navigasi || <NavBar />;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={styles["wadah-halaman"]}
        style={{
          // Alat bantu visual dimensi wadahnya.
          // Hapus kalau sudah.
          border: "solid blue 10px",
        }}
      >
        <header>{elemenNavigasi}</header>

        {/* <!----- OUTPUT CHILDREN -----> */}
        {children}
        {/* <!----- OUTPUT CHILDREN -----> */}
      </div>
    </>
  );
}

export { LayoutHalaman };
