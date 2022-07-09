import { PlayCircle } from "phosphor-react";
import { useStore } from "../src/stores/playStore";

function Mp3Comp(mp3: any) {
  let tracks = useStore((state) => state.tracks);
  const setPlay = useStore((state) => state.togglePlaying);
  const setPlaying = (arg: boolean) => setPlay(arg);

  const setActive = useStore((state) => state.setActive);
  const setActiveTrack = (arg: number) => setActive(arg);

  const findSongIndex = (songUrl: any) => {
    return tracks.findIndex((track: any) => track.url === songUrl);
  };

  const setTheTrack = (arg: string) => {
    const trackNumber = findSongIndex(arg);
    setActiveTrack(trackNumber);
    setPlaying(true);
  };

  return (
    <div>
      <div className="mp3Extrait" onClick={() => setTheTrack(mp3.mp3)}>
        <PlayCircle size={26} />{" "}
        <div>
          {" "}
          Extrait{" "}
          {tracks[findSongIndex(mp3.mp3)]
            ? ` : ${tracks[findSongIndex(mp3.mp3)].titre}`
            : null}
        </div>
      </div>
      <div className="mobileMp3">
        <audio controls={true} src={mp3.mp3} />
      </div>
    </div>
  );
}

export default Mp3Comp;
