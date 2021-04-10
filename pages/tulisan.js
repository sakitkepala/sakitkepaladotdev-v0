import * as React from "react";

function Tulisan({ children }) {
  return (
    <main>
      <h1>Tulisan</h1>

      <p>
        Catatan pembelajaran dalam frontend development, maupun tulisan apapun
        yang kurasa pantas untuk dibagikan di sini.
      </p>

      <ul>
        <li>Tulisan 1 &rarr;</li>
        <li>Tulisan 2 &rarr;</li>
        <li>Tulisan 3 &rarr;</li>
      </ul>
    </main>
  );
}

export default Tulisan;
