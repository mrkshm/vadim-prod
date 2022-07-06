import SidebarMusique from "../components/SidebarMusique";
import ItemsCpThe from "../components/ItemsCpThe";
import Head from "next/head";
import Script from "next/script";

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
        {concerts.map((concert: any) => (
          <ItemsCpThe item={concert} keyer={concert.id} />
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
