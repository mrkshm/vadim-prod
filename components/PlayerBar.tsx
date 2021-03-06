import Image from "next/image";
import ReactHowler from "react-howler";
import { useStore } from "../src/stores/playStore";
import { useRef, useState, useMemo, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "phosphor-react";

interface Track {
  id: number;
  titre: string;
  spectacle: string;
  url: string;
  imageUrl: string;
}

let tracks = [
  {
    id: 1,
    titre: "Ouverture",
    spectacle: "Don Juan",
    url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Don_Juan_Ouverture.mp3",
    imageUrl:
      "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/don_juan.jpg",
  },
  {
    id: 2,
    titre: "Pot pourri",
    spectacle: "Don Juan",
    url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Don_Juan_Pot_pourri.mp3",
    imageUrl:
      "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/don_juan.jpg",
  },
];

const getTracks = async () => {
  const rawRes = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=10&per_page=30"
  );
  const json = await rawRes.json();
  const tempTracks: Track[] = [];
  json.forEach((track: any) => {
    const newTrack: Track = {
      id: track.id,
      titre: track.acf.titre,
      spectacle: track.acf.spectacle,
      url: track.acf.url,
      imageUrl: track.acf.imageUrl,
    };
    tempTracks.push(newTrack);
  });
  tracks = tempTracks;
};

getTracks();

function PlayerBar() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [duration, setDuration] = useState(0.0);
  const [volume, setVolume] = useState(1);
  const soundRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  // const playing = useStore((state) => state.playing);
  // const setPlay = useStore((state) => state.setPlaying);
  // const setPlaying = (val: boolean) => {
  //   setPlay(val);
  // };

  const displayDuration = useMemo(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return seconds < 10
      ? `${minutes}:0${seconds.toFixed()}`
      : `${minutes}:${seconds.toFixed()}`;
  }, [duration]);

  const displaySeekTime = useMemo(() => {
    let seekFix = seek.toFixed();
    const minutes = Math.floor(Number(seekFix) / 60);
    const seconds = Number(seekFix) - minutes * 60;
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }, [seek]);

  const displayVolume = useMemo(() => {
    const fixedValue = volume * 100;
    return fixedValue.toFixed();
  }, [volume]);

  useEffect(() => {
    let timerId: any;

    if (playing && !isSeeking) {
      const f = () => {
        // @ts-ignore
        setSeek(soundRef.current.seek());
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [playing, isSeeking]);

  const setPlayState = (value: boolean) => {
    setPlaying(value);
  };

  const handlePlay = (activeTrack?: any) => {
    activeTrack;
  };

  const previousTrack = () => {
    if (activeTrack === 0) {
      setActiveTrack(0);
    } else {
      setActiveTrack(activeTrack - 1);
    }
  };

  const nextTrack = () => {
    if (activeTrack === tracks.length - 1) {
      setActiveTrack(0);
    } else {
      setActiveTrack(activeTrack + 1);
    }
  };

  const onEnd = () => {
    nextTrack();
  };

  const onLoad = () => {
    // @ts-ignore
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = (e: any) => {
    console.log("seek is", e);

    setSeek(parseFloat(e));
    // @ts-ignore
    soundRef.current.seek(e);
  };

  console.log("active track is", activeTrack);

  return (
    <div className="playerBar">
      <div className="trackInfo">
        <div className="trackImage">
          <Image
            className="trackPic"
            src={tracks[activeTrack].imageUrl}
            width="50px"
            height="50px"
          />
        </div>
        <div className="">
          <div className="trackName">{tracks[activeTrack].titre}</div>
          <div className="albumName">{tracks[activeTrack].spectacle}</div>
        </div>
      </div>
      <div className="playerMaind">
        <div className="howling">
          <ReactHowler
            playing={playing}
            src={tracks[activeTrack].url}
            ref={soundRef}
            volume={volume}
            onLoad={onLoad}
            onEnd={onEnd}
          />
          <div className="playerControlContainer">
            <div className="playerControls">
              <div className="playerSkipBack">
                <SkipBack onClick={() => previousTrack()} />
              </div>
              <div className="playerPlay">
                {playing ? (
                  <Pause onClick={() => setPlayState(false)} />
                ) : (
                  <Play
                    onClick={() => {
                      setPlayState(true);
                      handlePlay();
                    }}
                  />
                )}
              </div>
              <div className="playerSkipForward">
                <SkipForward onClick={() => nextTrack()} />
              </div>
            </div>
            <div className="seekBarContainer">
              <div className="playerCurrentTime">{displaySeekTime}</div>
              <div className="slideContainer">
                <input
                  disabled
                  className="timeSlider"
                  type="range"
                  min="1"
                  max={duration ? duration.toFixed(2) : 0}
                  value={seek}
                />
              </div>
              <div className="playerTotalTime">{displayDuration}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="volumeSection">
        <div>Volume: {displayVolume}</div>
        <label className="volSlider">
          <input
            type="range"
            min="0"
            max="1"
            step=".01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}

export default PlayerBar;
