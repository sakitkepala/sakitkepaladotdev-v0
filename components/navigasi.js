import Link from "next/link";

import st from "../styles/Dika.module.scss";

function MenuNavigasi() {
  return (
    <nav className={st.navigasi}>
      <Link href="/">
        <a className={st["navigasi__link"]}>Depan</a>
      </Link>
      <Link href="/lab">
        <a className={st.navigasi__link}>Lab</a>
      </Link>
      <Link href="/dika">
        <a className={st.navigasi__link}>Dika</a>
      </Link>
    </nav>
  );
}

export { MenuNavigasi };
