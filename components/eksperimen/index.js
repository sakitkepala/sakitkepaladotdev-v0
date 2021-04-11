import dynamic from "next/dynamic";

const eksperimen = {
  component: `./screens/20210411-1`,
  tanggal: "2021-04-11",
  tanggalSunting: null,
  judul: "Spike",
  deskripsi: "Bla bla bla. Awesome, ye kan?",
};

const loadEksperimen = (fallback) => {
  return dynamic(
    () => import(`${eksperimen.component}`).then((mod) => mod.Screen),
    {
      ssr: false,
      loading: () => fallback,
    }
  );
};

function ScreenEksperimen({ children }) {
  const fallback = children ?? <p>Loading...</p>;
  const LoadedComponent = loadEksperimen(fallback);
  return <LoadedComponent />;
}

export { ScreenEksperimen, eksperimen as data };
