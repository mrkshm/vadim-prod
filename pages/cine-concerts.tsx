import SidebarMusique from "../components/SidebarMusique";
import ItemMapperCtd from "../components/ItemMapperCtd";

import { sortInvChrono } from "../src/utils/helpers";

function cineConcerts({ result }: any) {
  const concerts = result.sort(sortInvChrono);
  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        <ItemMapperCtd items={concerts} />
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
