import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <nav>
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
      </nav>

      <div className="konten">
        <AnimatePresence
          exitBeforeEnter
          /**
           * Kita nanti butuh ini, karena alasan tertentu:
           * onExitComplete={handleExitComplete}
           */
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
