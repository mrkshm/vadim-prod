import SidebarMusique from "../components/SidebarMusique";
import ItemMapperCtd from "../components/ItemMapperCtd";

import { sortChrono } from "../src/utils/helpers";

function theatre({ result }: any) {
  const spectacles = result.sort(sortChrono);

  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        <ItemMapperCtd items={spectacles} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=7"
  );
  const result = await response.json();
  return {
    props: { result },
    revalidate: 20,
  };
}

export default theatre;
