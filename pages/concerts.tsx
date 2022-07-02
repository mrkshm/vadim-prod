import SidebarMusique from "../components/SidebarMusique";
import ItemsCpThe from "../components/ItemsCpThe";
import Head from "next/head";

import { sortChrono } from "../src/utils/helpers";

function musique({ result }: any) {
  const concerts = result.sort(sortChrono);

  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Concerts</title>
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
        {concerts.map((concert: any) => (
          <ItemsCpThe item={concert} key={concert.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=4"
  );
  const result = await response.json();

  return {
    props: { result },
    revalidate: 20,
  };
}

export default musique;
