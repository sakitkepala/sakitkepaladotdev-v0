import hydrate from "next-mdx-remote/hydrate";
import {
  getListInfoPostingan,
  getPostinganMenurutSlug,
} from "../../lib/api/tulisan";

export async function getStaticPaths() {
  const paths = getListInfoPostingan().map((postingan) => ({
    params: { slug: postingan.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postingan = await getPostinganMenurutSlug(params.slug);

  return {
    props: {
      postingan,
    },
  };
}

export default function PostinganPage({ postingan }) {
  const { sumber, info } = postingan;
  const konten = hydrate(sumber);
  return (
    <div className="lembar-tulisan">
      <h1>{info.judul}</h1>
      {konten}
    </div>
  );
}
