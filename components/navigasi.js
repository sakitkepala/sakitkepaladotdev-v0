import Link from "next/link";

import styles from "../styles/MenuNavigasi.module.scss";

function MenuNavigasi() {
  return (
    <nav className={styles.bungkus}>
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
  );
}

export { MenuNavigasi };
