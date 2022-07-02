import SidebarMusique from "../components/SidebarMusique";
import ItemsCpDisc from "../components/ItemsCpDisc";
import { sortInvChrono } from "../src/utils/helpers";
import { useStore } from "../src/stores/playStore";
import Head from "next/head";

function Discographie({ result }: any) {
  const albums = result.sort(sortInvChrono);

  // @ts-ignore
  const fetchIt = useStore((state) => state.fetch);
  const fetchTracks = (url: string) => fetchIt(url);

  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Discographie</title>
        <meta
          name="Vadim Sher"
          content="Vadim Sher - Pianiste, compositeur, musicien de scène"
        />
        <script
          async
          defer
          data-website-id="fafc8256-3873-4ad6-adfa-9dc8ffc13593"
          src="https://s.abla.io/abla.js"
        ></script>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        {albums.map((album: any, index: number) => (
          <ItemsCpDisc item={album} key={album.id} albumIndex={index} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=8"
  );
  const result = await response.json();

  return {
    props: { result },
    revalidate: 20,
  };
}

export default Discographie;
