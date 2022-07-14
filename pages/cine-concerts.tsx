import SidebarMusique from "../components/SidebarMusique";
import Head from "next/head";
import ItemsCp from "../components/ItemsCp";
import { sortChrono } from "../src/utils/helpers";
import Script from "next/script";

function cineConcerts({ result }: any) {
  const concerts = result.sort(sortChrono);
  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Ciné-concerts</title>
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
          <ItemsCp item={concert} key={concert.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=6"
  );
  const result = await response.json();
  return {
    props: { result },
    revalidate: 20,
  };
}

export default cineConcerts;
