import SidebarMusique from "../components/SidebarMusique";
import ItemsCpDisc from "../components/ItemsCpDisc";
import { sortInvChrono } from "../src/utils/helpers";
import { useStore } from "../src/stores/playStore";
import { useEffect } from "react";

function Discographie({ result }: any) {
  const albums = result.sort(sortInvChrono);

  // @ts-ignore
  const populate = useStore((state) => state.populateStore);
  const populateStore = (nuTracks: any) => populate(nuTracks);

  const fetchData = async () => {
    const response = await fetch(
      "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=10&per_page=30"
    );
    const res = await response.json();

  useEffect(() => {
    const tempTracks: any = [];

    const fetchData = async () => {
      const response = await fetch(
        "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=10&per_page=30"
      );
      const res = await response.json();

      res.forEach((track: any) => {
        const tempTrack = {
          id: track.id,
          titre: track.acf.titre,
          spectacle: track.acf.spectacle,
          url: track.acf.url,
          imageUrl: track.acf.imageUrl,
        };
        tempTracks.push(tempTrack);
      });

      populateStore(tempTracks);
    };

    fetchData();
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
