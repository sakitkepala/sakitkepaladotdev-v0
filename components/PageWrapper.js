import * as React from "react";

function PageWrapper({ children }) {
  return (
    <React.Fragment>
      <div>{children}</div>
    </React.Fragment>
  );
}

export default PageWrapper;
