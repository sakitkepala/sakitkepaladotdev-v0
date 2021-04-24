import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="cangkang-situs-sakitkepala">
      <AnimateSharedLayout>
        <AnimatePresence
          exitBeforeEnter
          /**
           * Kita nanti butuh ini, karena alasan tertentu:
           * onExitComplete={handleExitComplete}
           */
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
