import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
          {/* <a>@dika</a> */}
          {/* <a>@Dika</a> */}
          {/* <a>dika</a> */}
          <a>Dika</a>
        </Link>
      </nav>

      <div className="konten">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
