import ReactHowler from "react-howler";
import { useRef, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Play, Pause, SkipBack, SkipForward } from "phosphor-react";

function Player() {
  const activeTracks = useStoreState((state: any) => state.activeTracks);

  const activeTrack = useStoreState((state: any) => state.activeTrack);

  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [duration, setDuration] = useState(0.0);
  const soundRef = useRef(null);

  const setPlayState = (value: boolean) => {
    setPlaying(value);
  };

  const setActiveTrack = useStoreActions(
    (store: any) => store.changeActiveTrack
  );

  const handlePlay = (activeTrack?: any) => {
    setActiveTrack(activeTrack);
  };

  const previousTrack = () => {
    setIndex((state) => {
      return state ? state - 1 : activeTracks.length - 1;
    });
  };

  const nextTrack = () => {
    setIndex((state) => {
      return state === activeTracks.length - 1 ? 0 : state + 1;
    });
  };

  const onEnd = () => {
    nextTrack();
  };

  const onLoad = () => {
    // @ts-ignore
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = (e) => {
    setSeek(parseFloat(e));
    // @ts-ignore
    soundRef.current.seek(e);
  };

  console.log(activeTrack);
  console.log("all", activeTracks);

  return (
    <div className="howling">
      <ReactHowler
        playing={playing}
        src={activeTrack?.url}
        ref={soundRef}
        onLoad={onLoad}
        onEnd={onEnd}
      />
      <div className="playerControlContainer">
        <div className="playerControls">
          <div className="playerSkipBack">
            <SkipBack onClick={() => previousTrack} />
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
          <div className="playerCurrentTime">0.24</div>
          <div className="slideContainer">
            <input
              className="timeSlider"
              type="range"
              min="1"
              max={duration ? duration.toFixed(2) : 0}
              onChange={onSeek}
              // value="50"
            />
          </div>
          <div className="playerTotalTime">{duration}</div>
        </div>
      </div>
    </div>
  );
}

export default Player;
