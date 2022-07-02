import SidebarMusique from "../components/SidebarMusique";
import ItemsCp from "../components/ItemsCp";
import { sortChrono } from "../src/utils/helpers";
import Head from "next/head";

function cinema({ result }: any) {
  const films = result.sort(sortChrono);

  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Cinéma</title>
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
        {films.map((film: any) => (
          <ItemsCp item={film} key={film.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=5"
  );
  const result = await response.json();

  return {
    props: { result },
    revalidate: 20,
  };
}

export default cinema;
