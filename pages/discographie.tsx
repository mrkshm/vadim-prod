import SidebarMusique from "../components/SidebarMusique";
import ItemMapperAlt from "../components/ItemMapperAlt";
import { sortInvChrono } from "../src/utils/helpers";

function discographie({ result }: any) {
  const films = result.sort(sortInvChrono);

  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        <ItemMapperAlt items={films} />
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

export default discographie;
