import SidebarMusique from "../components/SidebarMusique";
import ItemMapperConcerts from "../components/ItemMapperConcerts";

import { sortChrono } from "../src/utils/helpers";

function musique({ result }: any) {
  const concerts = result.sort(sortChrono);

  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        <ItemMapperConcerts items={concerts} />
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
