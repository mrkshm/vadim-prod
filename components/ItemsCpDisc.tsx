import { itemVariants } from "../src/utils/helpers";
import { useStore } from "../src/stores/playStore";
import VideoPlayer from "./VideoPlayer";
import { PlayCircle } from "phosphor-react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function ItemsCpDisc({ item, key, albumIndex }: any) {
  // @ts-ignore
  let tracks = useStore((state) => state.tracks);
  // @ts-ignore
  const setPlay = useStore((state) => state.togglePlaying);
  const setPlaying = (arg: boolean) => setPlay(arg);

  // @ts-ignore
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
          {item.acf.mp3 ? (
            <div
              className="mp3Extrait"
              onClick={() => setTheTrack(item.acf.mp3)}
            >
              <PlayCircle size={32} />{" "}
              <div>
                {" "}
                Extrait{" "}
                {tracks[findSongIndex(item.acf.mp3)]
                  ? ` : ${tracks[findSongIndex(item.acf.mp3)].titre}`
                  : null}
              </div>
            </div>
          ) : null}
        </div>

        <hr className="line" />
      </motion.div>
    </div>
  ) : null;
}

export default ItemsCpDisc;
