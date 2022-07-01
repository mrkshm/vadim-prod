import SidebarMusique from "../components/SidebarMusique";
import ItemsCpDisc from "../components/ItemsCpDisc";
import { sortInvChrono } from "../src/utils/helpers";
import { useStore } from "../src/stores/playStore";
import { useEffect } from "react";

function Discographie({ result }: any) {
  const albums = result.sort(sortInvChrono);

  // @ts-ignore
  const fetchIt = useStore((state) => state.fetch);
  const fetchTracks = (url: string) => fetchIt(url);

  useEffect(() => {
    fetchTracks(
      "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=10&per_page=30"
    );
  }, []);

  return (
    <div className="mainSection">
      <div className="sidebar">
        <SidebarMusique />
      </div>
      <div className="main">
        {albums.map((album: any, index: number) => (
          <ItemsCpDisc item={album} key={album.id} albumIndex={index} />
        ))}
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

export default Discographie;
