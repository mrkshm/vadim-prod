import Mp3Comp from "./Mp3Comp";
import { useStore } from "../src/stores/playStore";
import VideoPlayer from "./VideoPlayer";
import { PlayCircle } from "phosphor-react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function ItemsCpDisc({ item, key, albumIndex }: any) {
  let tracks = useStore((state) => state.tracks);

  const setPlay = useStore((state) => state.togglePlaying);
  const setPlaying = (arg: boolean) => setPlay(arg);

  const setActive = useStore((state) => state.setActive);
  const setActiveTrack = (arg: number) => setActive(arg);

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
  }, [inView, ref]);

  const findSongIndex = (songUrl: any) => {
    return tracks.findIndex((track: any) => track.url === songUrl);
  };

  const setTheTrack = (arg: string) => {
    const trackNumber = findSongIndex(arg);
    setActiveTrack(trackNumber);
    setPlaying(true);
  };

  return tracks ? (
    <div key={key} ref={ref}>
      <motion.div animate={animation} className="alt-gridder">
        <div className="alt-flexor">
          <div className="alt-imagePart">
            <img
              className="alt-itemImage"
              src={item.acf.imageUrl}
              alt="detail du spectacle"
            />
          </div>

          <div className="alt-textPart">
            <div className="">
              <h3 className="alt-textTitle">{item.title.rendered}</h3>
              <div
                className="alt-description"
                dangerouslySetInnerHTML={{
                  __html: item.content.rendered,
                }}
              ></div>
            </div>
          </div>
          <div className="item-info">
            <div className="item-distribution">{item.acf.distribution}</div>
            <div className="item-label">{item.acf.label}</div>
          </div>
          {item.acf.video ? (
            <div className="alt-videoPart">
              <VideoPlayer url={item.acf.video} />
            </div>
          ) : null}
          <div>
            {item.acf.mp3 ? <Mp3Comp mp3={item.acf.mp3} /> : null}
            {item.acf.mp32 ? <Mp3Comp mp3={item.acf.mp32} /> : null}
            {item.acf.mp33 ? <Mp3Comp mp3={item.acf.mp33} /> : null}
          </div>
        </div>

        <hr className="line" />
      </motion.div>
    </div>
  ) : null;
}

export default ItemsCpDisc;
