import dynamic from "next/dynamic";

const loadEksperimen = (componentPath, fallback) => {
  return dynamic(
    () => import(`${componentPath}`).then((module) => module.Screen),
    {
      ssr: false,
      loading: () => fallback,
    }
  );
};

function ScreenEksperimen({ data, children }) {
  if (!Boolean(data)) {
    return (
      <p>
        !!! Error waktu memuat tampilan eksperimen. Data/ID belum diterima. !!!
      </p>
    );
  }

  const fallback = children ?? <p>Loading...</p>;
  const LoadedComponent = loadEksperimen(data.component, fallback);
  return <LoadedComponent />;
}

export { ScreenEksperimen };
