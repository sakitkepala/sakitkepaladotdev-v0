import Head from "next/head";
import { NavSitus } from "../components/nav-situs";

const svg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='pattern' width='24' height='24' viewBox='0 0 40 40' patternUnits='userSpaceOnUse'%3E%3Crect id='pattern-background' width='400%25' height='400%25' fill='rgba(255, 255, 255,1)'%3E%3C/rect%3E%3Ccircle fill='rgba(195, 218, 254,1)' cx='20' cy='20' r='2'%3E%3C/circle%3E%3Cpath fill='rgba(190, 227, 248,1)' d='M18 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaNm0.5 0aInfinityInfinity 0 0 1InfinityNaNaInfinityInfinity 0 0 1-InfinityNaNz'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23pattern)' height='100%25' width='100%25'%3E%3C/rect%3E%3C/svg%3E";

const bgPatternProp = {
  backgroundImage: `url("${svg}")`,
  backgroundRepeat: "repeat",
};

function LayoutHalaman({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ ...bgPatternProp }}>
        <NavSitus layoutId="nav-shared" />

        {/* <!----- OUTPUT CHILDREN -----> */}
        {children}
        {/* <!----- OUTPUT CHILDREN -----> */}
      </div>
    </>
  );
}

export { LayoutHalaman };
