import { motion } from "framer-motion";
import { NavLink } from "./nav-link";

import dataLinkNavbar from "../config/link-navbar.json";

export function NavBar({ layoutId = "nav-shared", style }) {
  return (
    <motion.nav layoutId={layoutId} className="nav-header">
      {dataLinkNavbar.map(({ href, teks, diarsip }) =>
        diarsip ? null : (
          <NavLink
            key={href}
            href={href}
            style={{ border: "solid black 1px", ...style }}
          >
            {teks}
          </NavLink>
        )
      )}
    </motion.nav>
  );
}

export function NavLinkItem({ dataLink }) {
  return dataLink.map(({ href, teks, diarsip }) =>
    diarsip ? null : (
      <NavLink key={href} href={href} style={{ border: "solid black 1px" }}>
        {teks}
      </NavLink>
    )
  );
}
