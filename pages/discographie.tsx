import SidebarMusique from "../components/SidebarMusique";
import ItemsCpDisc from "../components/ItemsCpDisc";
import { sortInvChrono } from "../src/utils/helpers";
import Head from "next/head";
import Script from "next/script";

function Discographie({ result }: any) {
  const albums = result.sort(sortInvChrono);

  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Discographie</title>
        <meta
          name="Vadim Sher"
          content="Vadim Sher - Pianiste, compositeur, musicien de scène"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script
        async
        defer
        data-website-id="fafc8256-3873-4ad6-adfa-9dc8ffc13593"
        src="https://s.abla.io/abla.js"
      ></Script>
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
