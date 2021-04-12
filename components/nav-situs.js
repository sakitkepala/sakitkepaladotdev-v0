import { motion } from "framer-motion";
import { NavLink } from "./nav-link";

export function NavSitus({ layoutId }) {
  return (
    <motion.nav layoutId={layoutId} className="nav-header">
      Navigasi&nbsp;&rarr;&rarr;&rarr;&rarr;&nbsp;
      <NavLink href="/">Depan</NavLink>
      &nbsp; | &nbsp;
      <NavLink href="/lab">Eksperimen</NavLink>
      &nbsp; | &nbsp;
      <NavLink href="/tulisan">Tulisan</NavLink>
      &nbsp; | &nbsp;
      <NavLink href="/dika">Dika</NavLink>
    </motion.nav>
  );
}
