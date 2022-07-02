import SidebarBiographie from "../components/SidebarBiographie";
import Biographie from "../components/Biographie";
import Head from "next/head";

function biographie({ bio }: any) {
  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Biographie</title>
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
        <SidebarBiographie
          bioPic={bio.acf.imageUrl}
          citation={bio.acf.citation}
          source={bio.acf.source}
        />
      </div>
      <div className="main">
        <Biographie bioText={bio.content.rendered} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/pages/2"
  );
  const bio = await res.json();
  return {
    props: { bio },
    revalidate: 20,
  };
}

export default biographie;
