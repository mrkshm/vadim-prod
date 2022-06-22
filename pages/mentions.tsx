import MentionsLegales from "../components/MentionsLegales";
import SidebarContact from "../components/SidebarContact";

function mentions({ ct }: any) {
  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarContact ctPic={ct.acf.imageUrl} />
      </div>
      <div className="main">
        <MentionsLegales />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/pages/241"
  );
  const ct = await res.json();
  return {
    props: { ct },
    revalidate: 20,
  };
}

export default mentions;
