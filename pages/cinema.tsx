import SidebarMusique from "../components/SidebarMusique";
import ItemsCp from "../components/ItemsCp";
import { sortChrono } from "../src/utils/helpers";

function cinema({ result }: any) {
  const films = result.sort(sortChrono);

  return (
    <div className="mainSection">
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
