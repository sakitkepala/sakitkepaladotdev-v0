import Link from "next/link";
import { motion, useCycle } from "framer-motion";

import styles from "../styles/MenuNavigasi.module.scss";
import React from "react";

const hamburger = {
  // sembunyi: { display: "none" },
  // tampil: { display: "block" },
};

function MenuNavigasi() {
  const layarKecil = useMedia(["(max-width: 600px)"], [true], false);
  const [toggleHamburger, cycleToggle] = useCycle(false, true);
  const isTampilHamburger = layarKecil && toggleHamburger;

  function onClickHamburger() {
    layarKecil && cycleToggle();
  }

  return (
    <div className={styles.navigasi}>
      {!layarKecil && (
        <nav className={styles.listMenu}>
          <Link href="/">
            <a className={styles["link"]}>Depan</a>
          </Link>
          <Link href="/lab">
            <a className={styles.link}>Lab</a>
          </Link>
          <Link href="/dika">
            <a className={styles.link}>Dika</a>
          </Link>
        </nav>
      )}

      <div className={styles.hamburger}>
        <button className={styles.tombolToggle} onClick={onClickHamburger}>
          <svg viewBox="0 0 100 40" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="70" height="10"></rect>
          </svg>
        </button>
      </div>

      {isTampilHamburger && (
        <div className={styles.screenMenu}>
          <button className={styles.close} onClick={() => cycleToggle()}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path>
            </svg>
          </button>

          <nav>
            <Link href="/">
              <a className={styles["link"]}>Depan</a>
            </Link>
            <Link href="/lab">
              <a className={styles.link}>Lab</a>
            </Link>
            <Link href="/dika">
              <a className={styles.link}>Dika</a>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

function useMedia(queries, values, defaultValue) {
  const mediaQueryLists =
    typeof window !== "undefined"
      ? queries.map((q) => window.matchMedia(q))
      : [];

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  const [value, setValue] = React.useState(getValue);

  React.useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);

  return value;
}

export { MenuNavigasi };
