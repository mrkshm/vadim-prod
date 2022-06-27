import SidebarMusique from "../components/SidebarMusique";
import ItemsCpThe from "../components/ItemsCpThe";
import { motion } from "framer-motion";
import { sortChrono } from "../src/utils/helpers";

function theatre({ result }: any) {
  const spectacles = result.sort(sortChrono);

  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        {spectacles.map((spectacle: any) => (
          <ItemsCpThe item={spectacle} key={spectacle.id} />
        ))}
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
    revalidate: 10,
  };
}

export default theatre;
