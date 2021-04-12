import { motion } from "framer-motion";
import Link from "next/link";

export function NavSitus({ layoutId }) {
  return (
    <motion.nav layoutId={layoutId} className="nav-header">
      Navigasi&nbsp;&rarr;&rarr;&rarr;&rarr;&nbsp;
      <Link href="/">
        <a>Depan</a>
      </Link>
      &nbsp; | &nbsp;
      <Link href="/lab">
        <a>Eksperimen</a>
      </Link>
      &nbsp; | &nbsp;
      <Link href="/tulisan">
        <a>Tulisan</a>
      </Link>
      &nbsp; | &nbsp;
      <Link href="/dika">
        <a>Dika</a>
      </Link>
    </motion.nav>
  );
}