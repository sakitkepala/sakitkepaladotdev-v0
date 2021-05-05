import { NavLink } from "./nav-link";

import styles from "../styles/LogoHeader.module.scss";

function LogoHeader() {
  return (
    <div className={styles.bungkus}>
      <NavLink href="/">
        <div className={styles.logoteks}>
          <span className={styles.stack}>&gt; andika</span>
          <span className={styles.stack}>priyotama</span>
        </div>
      </NavLink>
    </div>
  );
}

export { LogoHeader };
