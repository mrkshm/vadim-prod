import SidebarBiographie from "../components/SidebarBiographie";
import Biographie from "../components/Biographie";

function biographie({ bio }: any) {
  return (
    <div className="mainSection">
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
