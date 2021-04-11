import dynamic from "next/dynamic";

const loadEksperimen = (data, fallback) => {
  // TODO: refaktor path dynamic import-nya supaya gak hardcoded gitu
  // ? pakai konfig module/direktori resolver di webpack, mungkin?
  return dynamic(
    () =>
      import(`../../_lab/${data.slug}/src`).then(
        (module) => module.Screen,
        (e) => console.error(e)
      ),
    {
      ssr: false,
      loading: () => fallback,
    }
  );
};

function ScreenEksperimen({ data, children }) {
  if (data === undefined) {
    return (
      <p>
        !!! Error waktu memuat tampilan eksperimen. Data/ID belum diterima. !!!
      </p>
    );
  }

  const fallback = children ?? <p>Loading...</p>;
  const LoadedComponent = loadEksperimen(data, fallback);
  return <LoadedComponent />;
}

export { ScreenEksperimen };
