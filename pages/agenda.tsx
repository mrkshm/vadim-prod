import Head from "next/head";
import Agenda from "../components/Agenda";
import SidebarAgenda from "../components/SidebarAgenda";
import { sortChrono } from "../src/utils/helpers";

function agenda({ agendaSideBarPics, agendaItems }: any) {
  const spectacles = agendaItems.sort(sortChrono);

  return (
    <div className="mainSection agenda-mainSection">
      <Head>
        <title>Vadim Sher - Agenda</title>
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
        <SidebarAgenda
          img1={agendaSideBarPics.acf.imageUrl1}
          img2={agendaSideBarPics.acf.imageUrl2}
        />
      </div>
      <div className="main agendaMain">
        {spectacles.map((spectacle: any) => (
          <Agenda key={spectacle.id} spectacle={spectacle} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/pages/247"
  );
  const agendaSideBarPics = await res.json();

  const response = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=9"
  );
  const agendaItems = await response.json();

  return {
    props: { agendaSideBarPics, agendaItems },
    revalidate: 20,
  };
}

export default agenda;
