import { SiGithub } from "react-icons/si";
import { NavLink } from "./nav-link";

import layout from "../styles/Layout.module.scss";

function Footer() {
  return (
    <footer className={layout.footer}>
      <div className={layout.grid}>
        <div className={layout["footer__logo"]}>
          <NavLink href="/">&#47; Eksperimennya Dika</NavLink>
        </div>

        <div className={layout["footer__hak-cipta"]}>
          {new Date().getFullYear()} <span>☕&#10157;</span> Andika Priyotama D.
        </div>
      </div>

      <div className={layout["footer__kode-sumber"]}>
        <span>Kode sumber di</span>{" "}
        <a
          className={layout.linkGithub}
          href="https://github.com/sakitkepala/sakitkepaladotdev"
        >
          <SiGithub size="100%" />
        </a>
      </div>
    </footer>
  );
}

export { Footer };
