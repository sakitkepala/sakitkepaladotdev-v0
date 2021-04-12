import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { NavSitus } from "../components/nav-situs";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="sakitkepala-app">
      <NavSitus />
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
  );
}

export default MyApp;
